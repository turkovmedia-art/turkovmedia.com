import os
from PIL import Image

def create_favicon():
    # 1. Load the original logo
    logo_path = 'assets/logo-original.png'
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
    
    # 4. Resize the cropped logo to fit the canvas width (leaving margins, max width 480px)
    target_width = 480
    scale = target_width / w_crop
    new_w = int(w_crop * scale)
    new_h = int(h_crop * scale)
    
    # In case height becomes too large, scale by height instead
    if new_h > 480:
        target_height = 480
        scale = target_height / h_crop
        new_w = int(w_crop * scale)
        new_h = int(h_crop * scale)
        
    # Resize using high quality resampler
    img_resized = img_cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 5. Paste the resized logo in the center of the transparent canvas
    paste_x = (canvas_size - new_w) // 2
    paste_y = (canvas_size - new_h) // 2
    
    canvas.paste(img_resized, (paste_x, paste_y), img_resized)
    
    # 6. Save as PNG and ICO
    canvas.save('assets/favicon.png', 'PNG')
    
    # Save standard sizes for .ico
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    ico_images = []
    for size in ico_sizes:
        ico_images.append(canvas.resize(size, Image.Resampling.LANCZOS))
        
    ico_images[0].save('favicon.ico', format='ICO', append_images=ico_images[1:])
    print("Favicon created successfully as assets/favicon.png and favicon.ico from the entire transparent logo!")

if __name__ == '__main__':
    create_favicon()
