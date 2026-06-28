from PIL import Image, ImageDraw

def generate_favicon():
    # 1. Load the original uploaded image
    orig_path = "/Users/shmouelbetsaleldahan/.gemini/antigravity/brain/8db5fdfe-f3ab-45da-b243-ba92ff8f1019/media__1782660595069.png"
    img = Image.open(orig_path)
    
    # 2. Crop the logo bounds (left=396, top=248, right=626, bottom=323)
    # Let's add a small padding of 2px to ensure no edge pixels are cut off
    logo_crop = img.crop((394, 246, 628, 325))
    
    # 3. Create a 512x512 transparent image
    canvas_size = 512
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    
    # 4. Draw a dark navy circle in the center
    # Background color of the site is (11, 16, 37, 255)
    draw = ImageDraw.Draw(canvas)
    circle_margin = 16
    circle_radius = (canvas_size - circle_margin * 2) // 2
    center_x, center_y = canvas_size // 2, canvas_size // 2
    
    bbox = [
        center_x - circle_radius,
        center_y - circle_radius,
        center_x + circle_radius,
        center_y + circle_radius
    ]
    draw.ellipse(bbox, fill=(11, 16, 37, 255))
    
    # 5. Resize logo crop to fit beautifully inside the circle
    # Max width is 390px to prevent corners from reaching close to the circle edge
    max_width = 390
    orig_w, orig_h = logo_crop.size
    new_w = max_width
    new_h = int(orig_h * (new_w / orig_w))
    
    logo_resized = logo_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 6. Paste the resized logo into the center of the navy circle
    paste_x = center_x - new_w // 2
    paste_y = center_y - new_h // 2
    
    # Use logo_resized as mask if it has an alpha channel, otherwise paste directly
    canvas.paste(logo_resized, (paste_x, paste_y), logo_resized)
    
    # 7. Save outputs
    canvas.save("assets/favicon-new.png", "PNG")
    
    # Also save as 32x32 for standard favicon use if needed, and as ico
    # Since we need favicon.ico in the root directory:
    ico_img = canvas.resize((48, 48), Image.Resampling.LANCZOS)
    ico_img.save("favicon.ico", format="ICO")
    canvas.save("favicon.png", "PNG")
    
    print("Favicon images generated successfully!")

if __name__ == "__main__":
    generate_favicon()
