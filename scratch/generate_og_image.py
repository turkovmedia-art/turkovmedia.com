from PIL import Image

def generate_og_square():
    # 1. Load the original uploaded image
    orig_path = "/Users/shmouelbetsaleldahan/.gemini/antigravity/brain/8db5fdfe-f3ab-45da-b243-ba92ff8f1019/media__1782660595069.png"
    img = Image.open(orig_path)
    
    # 2. Crop the logo bounds (left=396, top=248, right=626, bottom=323)
    logo_crop = img.crop((394, 246, 628, 325))
    
    # 3. Create a 512x512 solid navy image (11, 16, 37, 255)
    canvas_size = 512
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (11, 16, 37, 255))
    
    # 4. Resize logo crop to fit beautifully inside the square
    max_width = 440
    orig_w, orig_h = logo_crop.size
    new_w = max_width
    new_h = int(orig_h * (new_w / orig_w))
    
    logo_resized = logo_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 5. Paste the resized logo into the center of the canvas
    paste_x = canvas_size // 2 - new_w // 2
    paste_y = canvas_size // 2 - new_h // 2
    
    # Paste using logo_resized as mask (it has alpha channel)
    canvas.paste(logo_resized, (paste_x, paste_y), logo_resized)
    
    # 6. Save output
    canvas.save("assets/og-image-square.png", "PNG")
    print("Square OG image generated successfully!")

if __name__ == "__main__":
    generate_og_square()
