import os
import json

# Define the base image directory
base_dir = "public/img"
output_json = "src/characters.json"

# Define tag mappings for different game names
game_tags = {
    "genshin_impact": "Genshin Impact",
    "star_rail": "Honkai: Star Rail",
    "zzz": "Zenless Zone Zero",
    "wuwa": "Wuthering Waves"
}

# Default properties
default_color = "#F09A04"
default_text = {
    "text": "MSS",
    "x": 148,
    "y": 58,
    "r": -2,
    "s": 47
}

# List to store sticker data
stickers = []
id_counter = 0  # Start ID from 0

# Traverse directories
for game_name in os.listdir(base_dir):
    game_path = os.path.join(base_dir, game_name)
    if not os.path.isdir(game_path):
        continue  # Skip non-directory files

    for character_name in os.listdir(game_path):
        char_path = os.path.join(game_path, character_name)
        if not os.path.isdir(char_path):
            continue

        for file_name in os.listdir(char_path):
            if file_name.lower().endswith(".png"):
                # Format file path
                file_path = f"{game_name}/{character_name}/{file_name}"

                # Get tag based on game name, default to empty if not found
                tag = game_tags.get(game_name.lower(), "")

                # Create sticker entry
                sticker = {
                    "id": id_counter,
                    "name": os.path.splitext(file_name)[0],
                    "character": character_name,
                    "tag": tag,
                    "img": file_path,
                    "color": default_color,
                    "defaultText": default_text
                }

                stickers.append(sticker)
                id_counter += 1  # Increment ID

# Write to JSON file
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(stickers, f, indent=4, ensure_ascii=False)

print(f"JSON file '{output_json}' has been generated with {len(stickers)} entries.")
