import os
from PIL import Image

def rename_files_to_lowercase(directory):
    for filename in os.listdir(directory):
        # Only process files that are not already in lowercase
        if filename != filename.lower():
            original_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, filename.lower())
            os.rename(original_path, new_path)
            print(f"Renamed {filename} to {filename.lower()}")

def convert_images_to_png(directory):
    # Ensure the output folder exists
    output_dir = os.path.join(directory, "converted_to_png")
    os.makedirs(output_dir, exist_ok=True)

    for filename in os.listdir(directory):
        if filename.lower().endswith((".jpg", ".jpeg", ".bmp", ".gif", ".tiff")):  # Add other formats as needed
            img_path = os.path.join(directory, filename)
            img = Image.open(img_path)
            
            # Set the new filename to be lowercase with a .png extension
            new_filename = os.path.splitext(filename)[0] + ".png"
            new_filepath = os.path.join(output_dir, new_filename)
            
            # Convert and save as PNG
            img.convert("RGB").save(new_filepath, "PNG")
            print(f"Converted {filename} to {new_filename}")



# Usage example:
directory = "./Assets/images/leagues"
rename_files_to_lowercase(directory)
convert_images_to_png(directory)
