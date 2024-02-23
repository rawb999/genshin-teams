from flask import Flask, jsonify, request
from flask_cors import CORS


def find_team(main_character, owned_characters, characters_info, selected_team_type):
    owned_characters.remove(main_character)
    team = [main_character]  # Start with the main character in the team
    team_specs = (
        characters_info.get(main_character)
        .get("team_types", {})
        .get(selected_team_type, {})
    )  # dictionary with team data
    required_elements = team_specs.get("required_elements", [])
    required_roles = team_specs.get("required_roles", [])
    character_groups = team_specs.get("character_groups", {})
    character_groups_amounts = team_specs.get("character_groups_amounts", {})

    group_counts = {group_name: 0 for group_name in character_groups}

    def is_group_limit_reached(candidate):
        for group_name, members in character_groups.items():
            if candidate in members:
                if group_counts[group_name] >= character_groups_amounts[group_name]:
                    return True
                else:
                    group_counts[group_name] += 1
                    return False
        return False

    # AT SOME POINT SORT THE OWNED CHARACTERS LISTS AND RECOMMENDED CHARACTERS LIST BY A TIER LIST ORDER BEFORE SORT
    # AT SOME POINT MAKE IT SO IF IT DOESN'T GET ALL OF THE CHARACTERS TO BE PROPERLY ON-ELEMENT AND ON-ROLE, IT NOTIFIES THE USER THEY DONT HAVE THE NECESSARY CHARACTERS
    # AT SOME POINT ADD THE OPTION TO REMOVE A CHARACTER FROM THE CREATED TEAM AND REMAKE ANOTHER VARIATION
    # Helper function to check and add a character if they fit the requirements
    # check_elements will be passed as true or false depending on whether we're considering the elements or roles in the decision
    def add_if_fits_requirements(char_name, check_elements=True, check_roles=True):
        if is_group_limit_reached(char_name):
            return False
        if len(team) >= 4:  # check to see if team is full or character excluded
            return False
        char_info = characters_info[
            char_name
        ]  # character being evaluated for fit on team
        fits_element = False
        fits_role = False
        if check_roles:
            if (
                len(required_roles) == 0
            ):  # indicates there is 1 or more flex slots on the team so no mandatory role to fill
                fits_role = True
            for x in char_info[
                "role"
            ]:  # iterate through all the possible roles for that character
                for y in required_roles:
                    if x in y:
                        fits_role = True
        if check_elements:
            if len(required_elements) == 0:
                fits_element = True
            for x in required_elements:
                if char_info["element"] in x:
                    fits_element = True
        if fits_role and fits_element:
            team.append(char_name)
            removedRole = False
            removedElement = False
            while (removedRole is False) and (len(required_roles) > 0):
                if check_roles:
                    for x in char_info["role"]:  # check each value in character roles
                        for (
                            y
                        ) in (
                            required_roles
                        ):  # iterate over every list inside required_roles
                            if x in y:  # the role is in that list
                                required_roles.remove(
                                    y
                                )  # remove the whole list because that slot is filled
                                removedRole = True
            while (removedElement is False) and (len(required_elements) > 0):
                if check_elements:
                    for x in required_elements:
                        if char_info["element"] in x:
                            required_elements.remove(x)
                            removedElement = True
            owned_characters.discard(char_name)
            return True
        return False

    # 1. add recommended teammates with correct element and role
    for recommended in team_specs.get("recommended_teammates", []):
        if recommended in owned_characters and recommended not in team:
            add_if_fits_requirements(recommended, check_elements=True, check_roles=True)

    # 2. add non_recommended characters that fit element and role
    for non_recommended in owned_characters:
        if non_recommended not in team:
            add_if_fits_requirements(
                non_recommended, check_elements=True, check_roles=True
            )

    # 3. add recommended teammates with correct role but not element
    for recommended in team_specs.get("recommended_teammates", []):
        if recommended in owned_characters and recommended not in team:
            add_if_fits_requirements(
                recommended, check_elements=False, check_roles=True
            )

    # 4. add non_recommended teammates with correct role but not element
    for non_recommended in owned_characters:
        if non_recommended not in team:
            add_if_fits_requirements(
                non_recommended, check_elements=False, check_roles=True
            )

    # 5. add recommended teammates with correct element but wrong role
    for recommended in team_specs.get("recommended_teammates", []):
        if recommended in owned_characters and recommended not in team:
            add_if_fits_requirements(
                recommended, check_elements=True, check_roles=False
            )

    # 6. add non_recommended characters with correct element but wrong role
    for non_recommended in owned_characters:
        if non_recommended not in team:
            add_if_fits_requirements(
                non_recommended, check_elements=True, check_roles=False
            )

    # 7. add recommended characters regardless if satisfying criteria
    for recommended in owned_characters:
        if recommended in owned_characters and recommended not in team:
            add_if_fits_requirements(
                recommended, check_elements=False, check_roles=False
            )

    # 8. add from a list of generally good characters

    # 9. add random characters if team not full
    for char_name in owned_characters:
        if len(team) >= 4:
            break
        if char_name not in team:
            team.append(char_name)

    return team


# when storing elements for a team, always put the multi-option slots first
# role": ["on-field", "off-field", "def", "heal", "buff", "battery", "group", "hyperbloomTrigger", "plungeAttacker", "shield"]
# character groups and the amounts are for if the guide recommends a 1 or 2 etc from a group of possible recommended characters
# only one character is needed for hydro app, add a dict entry of xignqiu: yelan and vice versa
characters_info = {
    "raiden": {
        "element": "electro",
        "role": ["on-field", "off-field", "battery", "hbloomTrig"],
        "team_types": {
            "carry": {
                "required_roles": [["off-field"], ["off-field"], ["off-field"]],
                "required_elements": [],
                "recommended_teammates": [
                    "bennett",
                    "xiangling",
                    "furina",
                    "xingqiu",
                    "yelan",
                    "kazuha",
                    "chevreuse",
                    "sara",
                    "lisa",
                ],
                "character_groups": {
                    "group1": ["xingqiu", "yelan"],
                    "group2": ["kazuha", "chevreuse"],
                    "group3": ["sara", "lisa"],
                },
                "character_groups_amounts": {"group1": 1, "group2": 1, "group3": 1},
            },
            "hyperbloom": {
                "required_roles": [["def"]],
                "required_elements": [["hydro", "dendro"], ["dendro"], ["hydro"]],
                "recommended_teammates": [
                    "nahida",
                    "baizhu",
                    "alhaitham",
                    "yaoyao",
                    "kokomi",
                    "xingqiu",
                    "yelan",
                    "ayato",
                    "neuvillette",
                ],
                "exclusions": {
                    "nahida": ["baizhu"],
                    "baizhu": ["nahida"],
                    "xingqiu": ["yelan"],
                    "yelan": ["xingqiu"],
                    "ayato": ["neuvillette"],
                    "neuvillette": ["ayato"],
                },
                "character_groups": {
                    "group1": ["baizhu", "nahida"],
                    "group2": ["xingqiu", "yelan"],
                    "group3": ["ayato", "neuvillette"],
                },
                "character_groups_amounts": {"group1": 1, "group2": 1, "group3": 1},
            },
        },
    },
    "ayaka": {
        "element": "cryo",
        "role": ["on-field"],
        "team_types": {
            "freeze": {
                "required_roles": [["buff"], ["buff", "heal"], ["group"]],
                "required_elements": [["cryo"], ["hydro"], ["anemo"]],
                "recommended_teammates": [
                    "rosaria",
                    "shenhe",
                    "kokomi",
                    "mona",
                    "kazuha",
                    "venti",
                ],
                "exclusions": {
                    "shenhe": ["rosaria"],
                    "rosaria": ["shenhe"],
                    "kokomi": ["mona"],
                    "mona": ["kokomi"],
                    "kazuha": ["venti"],
                    "venti": ["kazuha"],
                },
            },
            "monocryo": {
                "required_roles": [["def"], ["off-field"], ["off-field"]],
                "required_elements": [["cryo"], ["cryo"], ["anemo"]],
                "recommended_teammates": ["shenhe"],
                "character_groups": {},
                "character_groups_amounts": {},
            },
        },
    },
    "bennett": {
        "element": "pyro",
        "role": ["heal", "buff", "battery", "def", "off-field"],
        "team_types": {
            "general": {
                "required_roles": [["on-field"], ["off-field"], ["off-field"]],
                "required_elements": [],
                "recommended_teammates": [
                    "xiangling",
                    "lyney",
                    "tartaglia",
                    "wriothesley",
                    "raiden",
                    "wanderer",
                ],
                "character_groups": {},
                "character_groups_amounts": {},
            }
        },
    },
    "xiangling": {
        "element": "pyro",
        "role": ["off-field", "battery"],
        "team_types": {
            "general": {
                "required_roles": [["battery", "buff"]],
                "required_elements": [],
                "recommended_teammates": [
                    "bennett",
                    "kazuha",
                    "tartaglia",
                    "xingqiu",
                    "yelan",
                    "furina",
                    "raiden",
                    "lyney",
                    "ganyu",
                    "rosaria",
                ],
                "character_groups": {
                    "group1": ["kazuha", "sucrose"],
                    "group2": ["yelan", "furina", "xingqiu"],
                    "group3": ["ganyu", "rosaria"],
                },
                "character_groups_amounts": {"group1": 1, "group2": 1, "group3": 1},
            },
        },
    },
    "gaming": {
        "element": "pyro",
        "role": ["on-field", "plungeAttacker"],
        "team_types": {
            "vape": {
                "required_roles": [["heal"], ["off-field"], ["off-field"]],
                "required_elements": [["hydro"]],
                "recommended_teammates": [
                    "xingqiu",
                    "yelan",
                    "furina",
                    "xianyun",
                    "bennett",
                ],
                "character_groups": {"group1": ["xingqiu", "yelan", "furina"]},
                "character_groups_amounts": {"group1": 1},
            },
            "monoPyro": {
                "required_roles": [["battery"], ["off-field"], ["off-field"]],
                "required_elements": [["pyro"], ["pyro"], ["anemo"]],
                "recommended_teammates": [
                    "bennett",
                    "xiangling",
                    "furina",
                    "xianyun",
                    "bennett",
                ],
                "character_groups": {"group1": ["kazuha", "xianyun"]},
                "character_groups_amounts": {"group1": 1},
            },
        },
    },
    "albedo": {
        "element": "geo",
        "role": ["off-field", "def", "buff"],
        "team_types": {
            "hypercarrySupport": {
                "required_roles": [["on-field"], ["off-field"], ["off-field"]],
                "required_elements": [["geo"]],
                "recommended_teammates": [
                    "navia",
                    "arrataki",
                    "noelle",
                    "layla",
                    "tartaglia",
                    "zhongli",
                    "fischl",
                    "yelan",
                    "xingqiu",
                    "bennett",
                    "barbara",
                    "kokomi",
                    "kuki",
                    "diona",
                ],
                "character_groups": {
                    "group1": ["arrataki", "noelle", "navia"],
                },
                "character_groups_amounts": {"group1": 1},
            },
            "doubleGeoCore": {
                "required_roles": [["battery"], ["off-field"]],
                "required_elements": [["geo"]],
                "recommended_teammates": [
                    "zhongli",
                    "hutao",
                    "xingqiu",
                    "xiao",
                    "faruzan",
                    "yoimiya",
                    "yelan",
                    "wanderer",
                    "tighnari",
                    "yae",
                ],
                "character_groups": {
                    "group1": ["hutao", "xingqiu"],
                    "group2": ["xiao", "faruzan"],
                    "group3": ["faruzan", "wanderer"],
                    "group4": ["yoimiya", "yelan"],
                    "group5": ["tighnari", "yae"],
                },
                "character_groups_amounts": {
                    "group1": 1,
                    "group2": 1,
                    "group3": 1,
                    "group4": 1,
                    "group5": 1,
                },
            },
        },
    },
    "alhaitham": {
        "element": "dendro",
        "role": ["on-field"],
        "team_types": {
            "general": {
                "required_roles": [
                    ["off-field", "hyperbloomTrigger", "off-field"],
                    ["heal"],
                ],
                "required_elements": [
                    ["electro"],
                    ["dendro", "electro", "hydro"],
                    ["dendro", "hydro"],
                ],
                "recommended_teammates": [
                    "kuki",
                    "raiden",
                    "yae",
                    "fischl",
                    "nahida",
                    "baizhu",
                    "yaoyao",
                    "xingqiu",
                    "yelan",
                    "furina",
                ],
                "character_groups": {
                    "group1": ["raiden", "kuki"],
                    "group2": ["yae", "fischl"],
                    "group3": ["baizhu", "yaoyao"],
                    "group4": ["xingqiu", "yelan"],
                },
                "character_groups_amounts": {
                    "group1": 1,
                    "group2": 1,
                    "group3": 1,
                    "group4": 1,
                },
            }
        },
    },
    "amber": {
        "element": "pyro",
        "role": ["on-field"],
        "team_types": {
            "melt": {
                "required_roles": [["off-field"], ["off-field"], ["off-field"]],
                "required_elements": [["cryo"], ["cryo"]],
                "recommended_teammates": [
                    "rosaria",
                    "ganyu",
                    "diona",
                    "layla",
                    "chongyun",
                    "bennett",
                    "sucrose",
                    "kazuha",
                    "zhongli",
                ],
                "character_groups": {
                    "group1": ["rosaria", "ganyu", "diona", "layla", "chongyun"],
                    "group2": ["bennett", "sucrose", "kazuha", "zhongli"],
                },
                "character_groups_amounts": {"group1": 2, "group2": 2},
            }
        },
        "burgeon": {
            "required_roles": [["off-field"], ["off-field"], ["off-field"]],
            "required_elements": [["dendro"], ["hydro"]],
            "recommended_teammates": [
                "nahida",
                "dendTrav",
                "collei",
                "kokomi",
                "ayato",
                "nilou",
                "barbara",
                "zhongli",
                "kirara",
                "rosaria",
                "ganyu",
                "diona",
                "layla",
                "sucrose",
            ],
            "character_groups": {
                "group1": ["nahida", "dendroTrav", "collei"],
                "group2": ["kokomi", "ayato", "nilou", "barbara"],
                "group3": [
                    "zhongli",
                    "kirara",
                    "rosaria",
                    "ganyu",
                    "diona",
                    "layla",
                    "sucrose",
                ],
            },
            "character_groups_amounts": {"group1": 1, "group2": 1, "group3": 1},
        },
    },
    # ANEMO TRAVELER
}





def test():
    main_character = "ayaka"
    selected_team_type = "freeze"
    owned_characters = {"bennett", "xiangling", "raiden", "ayaka"}
    team = find_team(
        main_character, owned_characters, characters_info, selected_team_type
    )
    print(team)
