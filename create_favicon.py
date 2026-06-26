import os
import math
from PIL import Image, ImageDraw, ImageFilter

def create_favicon():
    # 1. Load the original logo
    logo_path = 'assets/logo-original.png'
    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} does not exist.")
        return
        
    img = Image.open(logo_path)
    w, h = img.size
    
    # 2. Crop the emblem (play button) on the right side of the logo
    # The emblem starts roughly at x=402 based on pixel analysis
    emblem_raw = img.crop((402, 0, w, h))
    bbox = emblem_raw.getbbox()
    if not bbox:
        print("Error: Could not find emblem bounding box.")
        return
        
    emblem = emblem_raw.crop(bbox)
    print(f"Cropped emblem size: {emblem.size}")
    
    # 3. Create a 512x512 canvas for the favicon
    canvas_size = 512
    # Navy blue base color matching the site theme: #05070c
    base_color = (5, 7, 12, 255)
    canvas = Image.new('RGBA', (canvas_size, canvas_size), base_color)
    
    # 4. Create a premium radial glow in the center
    # We will generate a soft cyan/blue radial gradient
    glow_layer = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow_layer)
    
    # Draw concentric circles with decreasing opacity to simulate a glow
    center_x, center_y = canvas_size // 2, canvas_size // 2
    max_radius = 220
    glow_color = (0, 240, 255) # Cyan
    
    for r in range(max_radius, 0, -2):
        # Opacity curve: stronger in center, fading to edges
        ratio = 1.0 - (r / max_radius)
        opacity = int((ratio ** 2.5) * 55) # Max opacity of 55 (approx 21%)
        color = glow_color + (opacity,)
        draw.ellipse(
            [center_x - r, center_y - r, center_x + r, center_y + r],
            fill=color
        )
        
    # Apply a light Gaussian blur to smooth the gradient
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(10))
    canvas = Image.alpha_composite(canvas, glow_layer)
    
    # 5. Resize the emblem to fit beautifully in the center (target width/height around 340px)
    target_max = 320
    emb_w, emb_h = emblem.size
    scale = target_max / max(emb_w, emb_h)
    new_w = int(emb_w * scale)
    new_h = int(emb_h * scale)
    
    # Use high quality Resampling
    emblem_resized = emblem.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 6. Paste the emblem in the center of the canvas
    paste_x = (canvas_size - new_w) // 2
    paste_y = (canvas_size - new_h) // 2
    
    canvas.paste(emblem_resized, (paste_x, paste_y), emblem_resized)
    
    # 7. Save as PNG and ICO
    canvas.save('assets/favicon.png', 'PNG')
    
    # Save standard sizes for .ico
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    ico_images = []
    for size in ico_sizes:
        ico_images.append(canvas.resize(size, Image.Resampling.LANCZOS))
        
    # Save favicon.ico in the root directory
    ico_images[0].save('favicon.ico', format='ICO', append_images=ico_images[1:])
    print("Favicon created successfully as assets/favicon.png and favicon.ico!")

if __name__ == '__main__':
    create_favicon()
