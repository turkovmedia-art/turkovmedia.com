import os
from PIL import Image, ImageDraw

def create_favicon():
    # 1. Load the logo with white text designed for dark backgrounds
    logo_path = 'assets/logo-dark-bg.png'
    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} does not exist.")
        return
        
    img = Image.open(logo_path)
    
    # 2. Find bounding box of non-transparent pixels to crop any excessive empty margins around the logo
    bbox = img.getbbox()
    if not bbox:
        print("Error: Empty logo image.")
        return
    img_cropped = img.crop(bbox)
    w_crop, h_crop = img_cropped.size
    print(f"Cropped logo size: {img_cropped.size}")
    
    # 3. Create a 512x512 canvas for the favicon with transparent background
    canvas_size = 512
    canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    
    # 4. Draw a solid dark-blue circle in the center of the transparent canvas
    draw = ImageDraw.Draw(canvas)
    # Background color of the circle matching site primary background (#050814)
    circle_color = (5, 8, 20, 255)
    margin = 16
    draw.ellipse(
        [margin, margin, canvas_size - margin, canvas_size - margin],
        fill=circle_color
    )
    
    # 5. Resize the cropped entire logo to fit beautifully inside the 480px circle (max width 420px)
    target_width = 420
    scale = target_width / w_crop
    new_w = int(w_crop * scale)
    new_h = int(h_crop * scale)
    
    # In case height becomes too large for the circle, scale by height instead
    if new_h > 420:
        target_height = 420
        scale = target_height / h_crop
        new_w = int(w_crop * scale)
        new_h = int(h_crop * scale)
        
    # Resize using high quality resampler
    img_resized = img_cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 6. Paste the resized logo in the center of the canvas (on top of the dark-blue circle)
    paste_x = (canvas_size - new_w) // 2
    paste_y = (canvas_size - new_h) // 2
    
    canvas.paste(img_resized, (paste_x, paste_y), img_resized)
    
    # 7. Save as PNG and ICO
    canvas.save('assets/favicon.png', 'PNG')
    
    # Save standard sizes for .ico
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    ico_images = []
    for size in ico_sizes:
        ico_images.append(canvas.resize(size, Image.Resampling.LANCZOS))
        
    # Save favicon.ico in the root directory
    ico_images[0].save('favicon.ico', format='ICO', append_images=ico_images[1:])
    print("Favicon created successfully with the entire logo inside a dark blue circle!")

if __name__ == '__main__':
    create_favicon()
