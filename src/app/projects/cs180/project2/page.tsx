import Image from "next/image";

export default function Project1() {
    return (
        <>
            <title>CS 180 Project 2</title>
            <div className="font-sans m-5 max-w-[1000px] mx-auto space-y-2 px-8">
                <h1 className="text-4xl font-bold">CS 180 Project 2</h1>
                <p>Name: Brandon Wong</p>
                <h2 className="text-2xl font-bold">Overview</h2>
                <p>
                    <Image src="/cs180project2media/BaseImages/cameraman.png" alt="cameraman" width={240} height={100} className="w-[240px] h-auto" />
                </p>
                <p>
                    Project 2 has multiple parts each with separate goals. Throughout the project, filters and frequencies are 
                    used to do accomplish a variety of different tasks.
                </p>
                <h2 className="text-2xl font-bold">Part 1: Fun with Filters</h2>
                <h3 className="text-xl font-bold">Part 1.1: Finite Difference Operator</h3>
                <p>
                    In this part, I convolved the finite difference operators D_x = [1, -1] and D_y = [[1], [-1]] with the cameraman image shown above.
                    This resulted in these two images:
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/cameraman_convolve_Dx.png" alt="cameraman_convolve_Dx" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Convolved with D_x</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/cameraman_convolve_Dy.png" alt="cameraman_convolve_Dy" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Convolved with D_y</p>
                    </div>
                </div>
                <p>
                    I then combined the two images by computing the square root of the sum of the squares of the two images, 
                    resulting in the gradient magnitude image. Then, I binarized the image at the threshold of 0.3 to find the 
                    edge image with minimal noise.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/cameraman_gradient_magnitude.png" alt="cameraman_gradient_magnitude" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Gradient Magnitude</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/cameraman_gradient_magnitude_binarized.png" alt="cameraman_gradient_magnitude_binarized" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Edge Image</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Part 1.2: Derivative of Gaussian (DoG) Filter</h3>
                <p>
                    In this part, I convolved the cameraman image with a gaussian created using the outer product of cv2.getGaussianKernel(15,2) to obtain a 
                    blurred version of the cameraman image. I then convolved this blurred image with D_x and D_y. These were then used to find the gradient 
                    magnitude image of the blurred image the same way as the previous part, and then this new gradient magnitude image was used to find 
                    the new edge image using the threshold 0.05, much smaller than in the previous part. Another difference was that the lines of the edge 
                    image became thicker in the edge image of the gaussian-blurred cameraman image compared to the unblurred version.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/G_cameraman_convolve_Dx.png" alt="G_cameraman_convolve_Dx" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Blurred Convolved with D_x</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/G_cameraman_convolve_Dy.png" alt="G_cameraman_convolve_Dx" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Blurred Convolved with D_x</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/G_cameraman_gradient_magnitude.png" alt="G_cameraman_gradient_magnitude" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Blurred Gradient Magnitude</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/G_cameraman_gradient_magnitude_binarized.png" alt="G_cameraman_gradient_magnitude_binarized" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Blurred Edge Image</p>
                    </div>
                </div>
                <p>
                    I also obtained very close results in a different way in this part. Instead of convolving the cameraman image with the gaussian, and 
                    then the D_x and D_y filters, I convolved the gaussian with the D_x and D_y filters to obtain the Derivative of Gaussian (DoG) filterns, 
                    and then convolved the cameraman with those resulting filters. This way, the cameraman only needed to be convolved with once for each 
                    filter result. The rest of the steps were the same, with a threshold at 0.05 again.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/DoGx_cameraman_convolve.png" alt="DoGx_cameraman_convolve" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Convolved with DoG_x</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/DoGy_cameraman_convolve.png" alt="DoGy_cameraman_convolve" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Convolved with DoG_x</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/DoG_cameraman_gradient_magnitude.png" alt="DoG_cameraman_gradient_magnitude" width={240} height={100} className="w-[240px] h-auto" />
                        <p>DoG Gradient Magnitude</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartOne/DoG_cameraman_gradient_magnitude_binarized.png" alt="DoG_cameraman_gradient_magnitude_binarized" width={240} height={100} className="w-[240px] h-auto" />
                        <p>DoG Edge Image</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Part 2: Fun with Frequencies!</h2>
                <h3 className="text-xl font-bold">Part 2.1: Image &quot;Sharpening&quot;</h3>
                <p>
                    In this part, I sharpened two images the given taj image and an image of a bowl of salmon and rice I had for dinner the other day. The 
                    images were sharped first by convolving them with a gaussians made from the outer product of cv2.getGaussianKernel(15,2) to obtain their 
                    low frequency versions. These low frequency versions were then subtracted from the original image to obtain just the high frequencies. 
                    The high frequencies were added to the original images to make them clearer and sharpen the original image. All of these steps were 
                    combined into a single step in the form of the unsharp mask filter, where the original images were convolved with 1 plus an alpha value 
                    multuplies by the identity filter minus the alpha value times the gaussian filter. I always set alpha to 1, it was always enough.
                </p>
                <h4 className="font-bold">Taj:</h4>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/taj.jpg" alt="taj" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/taj_blur.jpg" alt="taj_blur" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Low Frequency</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/taj_high_freq.jpg" alt="taj_high_freq" width={240} height={100} className="w-[240px] h-auto" />
                        <p>High Frequency</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/taj_sharp.jpg" alt="taj_sharp" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Sharpened</p>
                    </div>
                </div>
                <h4 className="font-bold">Salmon Bowl:</h4>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/salmon_bowl.jpg" alt="salmon_bowl" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/salmon_bowl_blur.jpg" alt="salmon_bowl_blur" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Low Frequency</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/salmon_bowl_high_freq.jpg" alt="salmon_bowl_high_freq" width={240} height={100} className="w-[240px] h-auto" />
                        <p>High Frequency</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project2media/PartTwo/salmon_bowl_sharp.jpg" alt="salmon_bowl_sharp" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Sharpened</p>
                    </div>
                </div>
                <p>
                    The unsharp mask filter was also tested on an image that was blurred with the gaussian first. This image was of a crepe cake I made 
                    the other day. Unfortunately the original quality of the image could not be reobtained, and the new sharped image was decidedly worse 
                    than the original, with an odd shininess to it.
                </p>
                <h4 className="font-bold">Crepe Cake:</h4>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/crepe_cake.jpg" alt="crepe_cake" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_blurred.jpg" alt="crepe_cake_blurred" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Blurred</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_sharp.jpg" alt="crepe_cake_sharp" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Sharpened</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Part 2.2: Hybrid Images</h3>
                <p>
                    In this part I blended the high frequencies of one image with the low frequencies of the other to create a hybrid image, where 
                    the low frequency image is what is seen from farther away while the low frequency image is what is seen while close up. I did this 
                    with three images the given Derek and Nutmeg images, an image of a bowl of chicken mapo tofu I made the other day and an image of a bowl of 
                    broccoli chicken I made another day, and an image of a salmon avocado and kimchi sandwich I made the other day and an image of a steak 
                    sandwich I made another day. The hybrid of the bowl of mapo tofu and broccoli chicken was a failure. While you can see a larger bowl (the 
                    mapo tofu) from farther away, the contents of the bowls really only look like broccoli chicken with a single distinct piece of tofu no matter 
                    the distance. This was likeley because both images have chicken pieces around the same size, which makes it hard to distinguish them. The 
                    tofu isn&apos;t particularly distinctive from pieces of chicken either, and the broccoli&apos;s darker color and what makes is distinct close up and 
                    farther away. The 
                </p>
                <h4 className="font-bold">Derek and Nutmeg:</h4>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/derek.jpg" alt="derek" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Derek</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/cat.jpg" alt="cat" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Nutmeg</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/derekcat.jpg" alt="derekcat" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Hybrid</p>
                    </div>
                </div>
                <h4 className="font-bold">Salmon Sandwich and Steak Sandwich:</h4>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/salmon_sandwich.jpg" alt="salmon_sandwich" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Salmon Sandwich</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/steak_sandwich.jpg" alt="steak_sandwich" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Steak Sandwich</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/salmon__sandwich_steak_sandwich.jpg" alt="salmon__sandwich_steak_sandwich" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Hybrid</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/salmon_sandwich_fourier.jpg" alt="salmon_sandwich_fourier" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Salmon Sandwich Fourier</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/steak_sandwich_fourier.jpg" alt="steak_sandwich_fourier" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Steak Sandwich Fourier</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/salmon_high_fourier.jpg" alt="salmon_high_fourier" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Salmon Sandwich High Fourier</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/steak_low_fourier.jpg" alt="steak_low_fourier" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Steak Sandwich Low Fourier</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/steak_salmon_fourier.jpg" alt="steak_salmon_fourier" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Steak and Salmon Sandwiches Fourier</p>
                    </div>
                </div>
                <h4 className="font-bold">Mapo Tofu and Broccoli Chicken Failure:</h4>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/mapo_tofu.jpg" alt="mapo_tofu" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Mapo Tofu</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/broccoli_chicken.jpg" alt="broccoli_chicken" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Broccoli Chicken</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/mapo_tofu_broccoli_chicken.jpg" alt="mapo_tofu_broccoli_chicken" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Hybrid</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Part 2.3: Gaussian and Laplacian Stacks</h3>
                <p>
                    In this part, I obtained the gaussian and laplacian stacks of the given apple and orange images. The gaussian stacks 
                    were obtained by repeatedly convolving the previous level with the gaussian formed from the outer product of 
                    cv2.getGaussianKernel(20, 20) to get the next level. The laplacian stack were generated by subtracting the previous 
                    level with the next level to find the difference between the levels. These stacks are displayed below.
                </p>
                <h4 className="font-bold">Apple Gaussian Stack</h4>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_gaussian_1.jpg" alt="apple_gaussian_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_gaussian_2.jpg" alt="apple_gaussian_2" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_gaussian_3.jpg" alt="apple_gaussian_3" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_gaussian_4.jpg" alt="apple_gaussian_4" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_gaussian_5.jpg" alt="apple_gaussian_5" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 1</p>
                    </div>
                </div>
                <h4 className="font-bold">Apple Laplacian Stack</h4>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_laplacian_1.jpg" alt="apple_laplacian_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_laplacian_2.jpg" alt="apple_laplacian_2" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_laplacian_3.jpg" alt="apple_laplacian_3" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_laplacian_4.jpg" alt="apple_laplacian_4" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/apple_laplacian_5.jpg" alt="apple_laplacian_5" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 1</p>
                    </div>
                </div>
                <h4 className="font-bold">Orange Gaussian Stack</h4>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_gaussian_1.jpg" alt="orange_gaussian_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_gaussian_2.jpg" alt="orange_gaussian_2" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_gaussian_3.jpg" alt="orange_gaussian_3" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_gaussian_4.jpg" alt="orange_gaussian_4" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_gaussian_5.jpg" alt="orange_gaussian_5" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 1</p>
                    </div>
                </div>
                <h4 className="font-bold">Orange Laplacian Stack</h4>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_laplacian_1.jpg" alt="orange_laplacian_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_laplacian_2.jpg" alt="orange_laplacian_2" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_laplacian_3.jpg" alt="orange_laplacian_3" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_laplacian_4.jpg" alt="orange_laplacian_4" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project2media/PartTwo/orange_laplacian_5.jpg" alt="orange_laplacian_5" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Level 1</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Part 2.4: Multiresolution Blending</h3>
                <p>
                    In this part, I brought the stacks obtained through the methods in the previous part together to obtain the 
                    blended result of the two images based on input masks. The final blended images were obtained by summing up the 
                    laplacian stacks and their corresponding mask (obtained by convolving the mask of the previous level with a gaussian) 
                    up and then adding the final blurriest gaussian level multiplied the mask of its level on top of that. The two 
                    summed of separate stacks of the two different images were then summed together to obtain the final blended 
                    image, with the seam smoothed out. I did this on the given apple and orange images, an image from a breakfast 
                    taco I made the other day and a pot filled with mist from dry ice, and a different image of the same crepe cake 
                    from before and an image of cookie dough with a spoon in it. The last blended image is my favorite, it looks like 
                    the cookie dough is being spread over the crepe cake as frosting. The second two images have irregular masks, 
                    one with an oval and one with an oval with a rectangle sticking out of it. The results are shown below.
                </p>
                <h4 className="font-bold">Apple and Orange:</h4>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/apple_gaussian_0.jpg" alt="apple" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Apple</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/orange_gaussian_0.jpg" alt="orange" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Orange</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project2media/PartTwo/apple_orange_blended.jpg" alt="oraple" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Orapple</p>
                    </div>
                </div>
                <h4 className="font-bold">Breakfast Taco and Misty Pot:</h4>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project2media/PartTwo/breakfast_taco_misty_pot.jpg" alt="breakfast_taco_misty_pot" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Taco in Pot</p>
                    </div>
                </div>
                <h4 className="font-bold">Crepe Cake and Cookie Dough:</h4>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough.jpg" alt="crepe_cake_cookie_dough" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Cookie Dough Frosted Crepe Cake</p>
                    </div>
                </div>
                <h4 className="font-bold">Crepe Cake Laplacian Stack</h4>
                <div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/close_crepe_cake_laplacian_0.jpg" alt="close_crepe_cake_laplacian_0" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/close_crepe_cake_laplacian_1.jpg" alt="close_crepe_cake_laplacian_1" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/close_crepe_cake_laplacian_2.jpg" alt="close_crepe_cake_laplacian_2" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/close_crepe_cake_laplacian_3.jpg" alt="close_crepe_cake_laplacian_3" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/close_crepe_cake_laplacian_4.jpg" alt="close_crepe_cake_laplacian_4" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 1</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/close_crepe_cake_laplacian_5.jpg" alt="close_crepe_cake_laplacian_5" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 0</p>
                    </div>
                </div>
                <h4 className="font-bold">Cookie Dough Laplacian Stack</h4>
                <div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/cookie_dough_laplacian_0.jpg" alt="cookie_dough_laplacian_0" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/cookie_dough_laplacian_1.jpg" alt="cookie_dough_laplacian_1" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/cookie_dough_laplacian_2.jpg" alt="cookie_dough_laplacian_2" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/cookie_dough_laplacian_3.jpg" alt="cookie_dough_laplacian_3" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/cookie_dough_laplacian_4.jpg" alt="cookie_dough_laplacian_4" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 1</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/cookie_dough_laplacian_5.jpg" alt="cookie_dough_laplacian_5" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 0</p>
                    </div>
                </div>
                <h4 className="font-bold">Cookie Dough and Crepe Cake Laplacian Stack</h4>
                <div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough_laplacian_0.jpg" alt="crepe_cake_cookie_dough_laplacian_0" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 5</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough_laplacian_1.jpg" alt="crepe_cake_cookie_dough_laplacian_1" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 4</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough_laplacian_2.jpg" alt="crepe_cake_cookie_dough_laplacian_2" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 3</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough_laplacian_3.jpg" alt="crepe_cake_cookie_dough_laplacian_3" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 2</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough_laplacian_4.jpg" alt="crepe_cake_cookie_dough_laplacian_4" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 1</p>
                    </div>
                    <div className="float-left w-1/6">
                        <Image src="/cs180project2media/PartTwo/crepe_cake_cookie_dough_laplacian_5.jpg" alt="crepe_cake_cookie_dough_laplacian_5" width={140} height={100} className="w-[140px] h-auto" />
                        <p>Level 0</p>
                    </div>
                </div>
            </div>
        </>
    )
}