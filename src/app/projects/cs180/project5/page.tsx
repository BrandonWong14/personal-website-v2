import Image from "next/image";

export default function Project1() {
    return (
        <>
            <title>CS 180 Project 3</title>
            <div className="font-sans m-5 max-w-[1000px] mx-auto space-y-2 px-8">
                <h1 className="text-4xl font-bold">CS 180 Project 5</h1>
                <p>Name: Brandon Wong</p>
                <h2 className="text-2xl font-bold">Part A: The Power of Diffusion Models!</h2>
                <p>
                    The purpose of project 5A is to get familiar with the usage of diffusion models by 
                    implementing diffusion sampling loops and using them for other tasks such as inpainting and creating optical illusions. 
                    This was done using the stages 1 and 2 of the DeepFloydIF diffusion model. Before each time results were obtained, a seed was set. This part was 
                    done in Colab. The unet instance from stage 1 was used for most sections, although section 0 looked at examples with different numbers 
                    of inference steps.
                </p>

                <h3 className="text-xl font-bold">0 | Setup</h3>
                <p>
                    This section was mainly just looking at results from the DeepFloydIF diffusion model as a point of comparison as an example of what 
                    is partially being implemented throughout the rest of this project. Results at 1 , 5, 10, 20, 40, and 100 inference steps (in stage 1) were observed, 
                    shown below. The seed used to ensure reproduceability was 714. Some results of adding different numbers of steps in stage 2 were 
                    also looked at (not shown), but as stage 2 is just upscaling from the results of stage 1 it really only affected image clearness and quality.
                    Increasing the number of inference steps increased the general reasonables of the image, although improvements really started decreasing at around 10 steps.
                    It was interesting to see how later steps moved in the direction of art rather than attempt to be realistic.
                </p>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/0steps.png" alt="1steps" width={500} height={100} className="w-[500px] h-auto" />
                        <p>1 Inference Step</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/5steps.png" alt="5steps" width={500} height={100} className="w-[500px] h-auto" />
                        <p>5 Inference Steps</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/10steps.png" alt="10steps" width={500} height={100} className="w-[500px] h-auto" />
                        <p>10 Inference Steps</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/20steps.png" alt="20steps" width={500} height={100} className="w-[500px] h-auto" />
                        <p>20 Inference Steps</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/40steps.png" alt="40steps" width={500} height={100} className="w-[500px] h-auto" />
                        <p>40 Inference Steps</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/100steps.png" alt="100steps" width={500} height={100} className="w-[500px] h-auto" />
                        <p>100 Inference Steps</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">1 | Implementing the Forward Process</h3>
                <p>
                    In this section, I implemented a forwarding function to add noise at different timesteps based on the alpha values at 
                    different timesteps selected by the DeepFloydIF model. The equation to calculate x_t, the image at different timesteps, 
                    is shown below. Examples of an image with noise added at timesteps 250, 500, and 750 are also shown below alongside the 
                    original image without noise.
                </p>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/forwardingprocess.png" alt="forwarding process" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Forwarding Process Definition and Equivalent Equation</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/campanile_64.jpg" alt="campanile" width={230} height={100} className="w-[95%] h-auto" />
                        <p>64x64 Image of the Campanile</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/campanile_250.png" alt="step 250" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Noise at Step 250</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/campanile_500.png" alt="step 500" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Noise at Step 500</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/campanile_750.png" alt="step 750" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Noise at Step 750</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">2 | Classical Denoising</h3>
                <p>
                    Once the forwarding results at the three timesteps were obtained, I used gaussian blur filtering to see what those results 
                    would look like, shown below.
                </p>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/campanile_250_blur.png" alt="step 250 blur" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Blur at Step 250</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/campanile_500_blur.png" alt="step 500 blur" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Blur at Step 500</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/campanile_750_blur.png" alt="step 750 blur" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Blur at Step 750</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">3 | One-Step Denoising</h3>
                <div>
                    The use of a pretrained UNet model for denoising was also used to see what those results would look like if noise was reduced 
                    in one step.
                </div>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/unet_250.png" alt="step 250 unet" width={230} height={100} className="w-[95%] h-auto" />
                        <p>UNet One Step at Step 250</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/unet_500.png" alt="step 500 unet" width={230} height={100} className="w-[95%] h-auto" />
                        <p>UNet One Step at Step 500</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/unet_750.png" alt="step 750 unet" width={230} height={100} className="w-[95%] h-auto" />
                        <p>UNet One Step at Step 750</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">4 | Iterative Denoising</h3>
                <div>
                    In this section, I finally used iterative denoising (diffusion) with step skipping to speed it up. Starting at step 990, 
                    steps of size 30 were taken until step 0, the original image, was obtained after starting from a noisy image. In this specific 
                    section, the iteration started from the tenth timestep to ensure the resulting image was close to the original. The equations 
                    used to find the predicted previous image at each step is shown below.
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/iterativeprocess.png" alt="iterative process" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Iterative Process Equation</p>
                    </div>
                </div>
                <p>
                    This process was run on a noisy campanile image. The resulting images at every fifth timestep are shown below. The original 
                    image, resulting image, UNet result, and gaussian blur result are all also shown below.
                </p>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/iterative_tensor(90).png" alt="iterative 90" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Iterative Prediction at Step 90</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/iterative_tensor(240).png" alt="iterative 240" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Iterative Prediction at Step 240</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/iterative_tensor(390).png" alt="iterative 390" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Iterative Prediction at Step 390</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/iterative_tensor(540).png" alt="iterative 540" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Iterative Prediction at Step 540</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/iterative_tensor(690).png" alt="iterative 690" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Iterative Prediction at Step 690</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/iterative_original.png" alt="noisy" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Noisy Image</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/iterative_result.png" alt="result" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Iterative Result</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/iterative_one_step.png" alt="one step" width={230} height={100} className="w-[95%] h-auto" />
                        <p>One Step Result</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180project5mediaA/iterative_blur.png" alt="gaussian blur" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Gaussian Blur Result</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">5 | Diffusion Model Sampling</h3>
                <p>
                    Instead of starting from the tenth timestep, this time the iterative process was started from the first one with 
                    a completely random image. This allowed for generation of completely new images, with the prompt used being &quot;a high 
                    quality image&quot; for the input to the model at each step.
                </p>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.5_image_0.png" alt="random image 0" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.5_image_1.png" alt="random image 1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.5_image_2.png" alt="random image 2" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.5_image_3.png" alt="random image 3" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.5_image_4.png" alt="random image 4" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Random Image 0</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">6 | Classifier-Free Guidance (CFG)</h3>
                <p>
                    To improve the images, classifier free guidance was added to the iterative denoiser by computing the 
                    estimated noise both conditioned on a text prompt and unconditional. The overall noise estimate is the unconditional estimate 
                    plus a scale factor multiplied by the difference between the estimation on a prompt and the unconditional estimate. Five 
                    examples the the result of this are shown below. A scale 
                    factor of 7 was used with the prompt being &quot;a high quality photo&quot; each time.
                </p>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.6_image_0.png" alt="cfg random image 0" width={230} height={100} className="w-[95%] h-auto" />
                        <p>CFG Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.6_image_1.png" alt="cfg random image 1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>CFG Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.6_image_2.png" alt="cfg random image 2" width={230} height={100} className="w-[95%] h-auto" />
                        <p>CFG Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.6_image_3.png" alt="cfg random image 3" width={230} height={100} className="w-[95%] h-auto" />
                        <p>CFG Random Image 0</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project5mediaA/part_1.6_image_4.png" alt="cfg random image 4" width={230} height={100} className="w-[95%] h-auto" />
                        <p>CFG Random Image 0</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">7 | Image-to-Image Translation</h3>
                <p>
                    Noise was added to images in varying amounts up to certain timesteps before running the CFG iterative denoising 
                    function on them to see what results would occur from denoising at certain points. This was done on three images; the campanile, 
                    a picture of a mug with cal on it, and a picture of a plushy. These results are shown below.
                </p>
                <div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_campanile_1.png" alt="campanile1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile 1</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_campanile_3.png" alt="campanile3" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile 3</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_campanile_5.png" alt="campanile5" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile 5</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_campanile_7.png" alt="campanile7" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile 7</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_campanile_10.png" alt="campanile10" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile 10</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_campanile_20.png" alt="campanile20" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile 20</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/campanile_64.jpg" alt="campanile64" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Campanile Original</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_calmug_1.png" alt="calmug1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug 1</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_calmug_3.png" alt="calmug3" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug 3</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_calmug_5.png" alt="calmug5" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug 5</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_calmug_7.png" alt="calmug7" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug 7</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_calmug_10.png" alt="calmug10" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug 10</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_calmug_20.png" alt="calmug20" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug 20</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/calmug_64.jpg" alt="calmug64" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Cal Mug Original</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_plushy_1.png" alt="plushy1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy 1</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_plushy_3.png" alt="plushy3" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy 3</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_plushy_5.png" alt="plushy5" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy 5</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_plushy_7.png" alt="plushy7" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy 7</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_plushy_10.png" alt="plushy10" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy 10</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/part_1.7_plushy_20.png" alt="plushy20" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy 20</p>
                    </div>
                    <div className="float-left w-[14.28%]">
                        <Image src="/cs180project5mediaA/plushy_64.jpg" alt="plushy64" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plushy Original</p>
                    </div>
                </div>

                <h4 className="font-bold">7.1 | Editing Hand-Drawn and Web Images</h4>
                <p>
                    The same process as the previous part was done in this part, except this time it was done on one image obtained from the 
                    web and two very simple badly done/very vague drawn images. The first drawn image was kinda meant to be a sailboat metal 
                    battleship and the second was supposed to be a starry sky. The web image is from 
                    <a href="https://www.brickvault.toys/cdn/shop/products/Y-wing_79a92a3d-8997-47d0-8d00-bbf73b783c3b_1050x1050.jpg">here</a>.
                </p>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/lego_y_wing64.jpg" alt="web image" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Web Image</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/1.7.1drawn_image_1.png" alt="drawn image 1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Drawn Image 1</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/1.7.1drawn_image_2.png" alt="drawn image 2" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Drawn Image 2</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/1.7.1web_image_results.png" alt="web image results" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Web Image Results</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/1.7.1drawn_image_1_results.png" alt="drawn image 1 results" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Drawn Image 1 Results</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/1.7.1drawn_image_2_results.png" alt="drawn image 2 results" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Drawn Image 2 Results</p>
                    </div>
                </div>

                <h4 className="font-bold">7.2 | Inpainting</h4>
                <p>
                    By forcing the image at each step to have the forward prediction from the original image at all points that are not 
                    the mask, inpainting can be done, where only a select portion of the image develops a random result based on the image and the rest remain 
                    the original image. This is shown below on the campanile, mug, and plushy. The campanile ends up with a new 
                    top, the mug ends phased out of the image (a bit badly), and the plushy gets a nose.
                </p>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/inpaintprocess.png" alt="inpaint process" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Inpainting Process</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/part_1.7.2_campanile.png" alt="1.7.2 campanile" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Inpainted Campanile</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/part_1.7.2_calmug.png" alt="1.7.2 calmug" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Inpainted Mug</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180project5mediaA/part_1.7.2_plushy.png" alt="1.7.2 plushy" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Inpainted Plushy</p>
                    </div>
                </div>

                <h4 className="font-bold">7.3 | Text-Conditional Image-to-Image Translation</h4>
                <p>
                    This runs the same thing as the first part of 7, but it runs guided by a prompt instead of nothing. This allows for 
                    interesting changes as the model attempts to obtain an image based on the prompt from the original image to 
                    varying extents as shown below on different stages of added noise on the campanile, mug, and plushy.
                </p>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/1_7_3_campanile.png" alt="1_7_3_campanile" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Prompt Based Translation from Campanile, Starting from Forwarding to Different Timesteps</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/1_7_3_calmug.png" alt="1_7_3_calmug.png" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Prompt Based Translation from Mug, Starting from Forwarding to Different Timesteps</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/1_7_3_plushy.png" alt="1_7_3_plushy" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Prompt Based Translation from Plushy, Starting from Forwarding to Different Timesteps</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">8 | Visual Anagrams</h3>
                <p>
                    In this section, anagrams from two different prompts were developed. The noise from transforming an image from one prompt 
                    and the noise from transforming the flipped image from another promt were averaged for a combined transformation at each 
                    step until the final result appears to be one image right side up and another image upside down. This is shown below.
                </p>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.8_image_1.png" alt="1_8_image_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;an oil painting of people around a campfire&quot; and &quot;an oil painting of an old man&quot;</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.8_image_1.png" alt="1_8_image_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;an oil painting of people around a campfire&quot; and &quot;an oil painting of an old man&quot;</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.8_image_2.png" alt="1_8_image_2" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;an oil painting of a snowy mountain village&quot; and &quot;a photo of the amalfi cost&quot;</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.8_image_3.png" alt="1_8_image_3" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;a rocket ship&quot; and &quot;a lithograph of waterfalls&quot;</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">9 | Hybrid Images</h3>
                <div>
                    In this section, the low frequencies of the noise from running the model on the current step on one prompt and the high 
                    frequencies from running the model on the current step on another prompt were combined to form an overall noise to remove, 
                    which eventually reaches a hybrid image after all the iterations. A kernel size of 33 and a sigma of 2 was used. The results 
                    are shown below.
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.9_image_1.png" alt="1_9_image_1" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;a lithograph of a skull&quot; and &quot;a lithograph of waterfalls&quot;</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.9_image_2.png" alt="1_9_image_2" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;a photo of the amalfi cost&quot; and &quot;a puffy cloud</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaA/part_1.9_image_3.png" alt="1_9_image_3" width={180} height={100} className="w-[180px] h-auto" />
                        <p>&quot;a space battleship&quot; and &quot;a chalk drawing of a skyscraper&quot;</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold">Part B: Diffusion Models from Scratch!</h2>
                <div>
                    After having had fun working with with prebuilt models in Part A, in this part I implemented some basic versions of the model from 
                    the previous section. Three versions of UNet were made; single step, time conditional, and time and class conditional. Each was was 
                    an improvement from the previous one, built using pytorch to be able to at dirst denoise and then generate results from and based on 
                    the MNIST dataset. The first step was to make a noise generator function to train the models to denoise, with the results at different 
                    σ values shown below. Everything was done in Google Colab.
                </div>
                <div>
                    <div className="float-left w-full h-[550px]">
                        <Image src="/cs180project5mediaB/noising.png" alt="noising" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Noise at Different σ Values</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">1 | Training a Single Step Denoising UNet</h3>
                <p>
                    The purpose of section 1 was to implement a basic version of UNet that could be used to try to denoise images in a single step, 
                    the simplest form possible.
                </p>

                <h4 className="font-bold">1.1 | Implementing the UNet</h4>
                <p>
                    To implement UNet myself, using the nn.Module class from pytorch, I first made classes for basic blocks 
                    that I then put together in a class for the UNet model. The basic blocks generally consisted of a convolution of some sort followed 
                    by a batch norm and then gelu, although there were several blocks that used things such as average pool and concatentation instead 
                    as those are also part of UNet. The number of channels in each section were generally some multiple of a hidden dimension hyperparameter.
                </p>
                
                <h4 className="font-bold">1.2 | Using the UNet to Train a Denoiser</h4>
                <p>
                    After establishing a UNet model, I trained it on the MNIST training set. This was done over five epochs with batches of 256 images at 
                    a time. L2 loss, also known as the mean square error, was used to train the model. The model was trained on images noised with 
                    a σ of 0.5. The Adam optimizer was used to optimize the model with a learning rate of 1e-4. The hidden dimension for this model 
                    was set to 128. Overall, it took around 8 minutes with a final loss of 0.008393 on the last batch of data. After obtaining the trained 
                    model, testing was done to see how effective it would be on images with varying levels of noise added.
                </p>

                <h4 className="font-bold">1.3 | Results</h4>
                <p>
                    The results of the model are shown below. The loss over each step is the first image, and the only graph, shown below. The loss curve 
                    in the first epoch and fifth epoch are also shown to compare to each other. After that, the samples used for testing and observing 
                    the differences in effectiveness between training on one epoch and another epoch are shown, followed by the results at those two epochs. 
                    Finally the out-of-distribution results, where the model was testing on images noised with values other than 0.5 are shown beneath, 
                    with artifacts showing up significantly starting around σ = 0.8.
                </p>
                <div>
                    <div className="float-left w-full h-[600px]">
                        <Image src="/cs180project5mediaB/1_2_1_loss_curve.png" alt="1_2_1_loss_curve" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Plot of Loss per Step for UNet</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2 h-[420px]">
                        <Image src="/cs180project5mediaB/1_2_1_epoch1.png" alt="1_2_1_epoch1" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plot of Loss per Step for Epoch 1</p>
                    </div>
                    <div className="float-left w-1/2 h-[420px]">
                        <Image src="/cs180project5mediaB/1_2_1_epoch5.png" alt="1_2_1_epoch5" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Plot of Loss per Step for Epoch 5</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[270px]">
                        <Image src="/cs180project5mediaB/1_2_1_test_samples.png" alt="1_2_1_test_samples" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Samples for Testing</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2 h-[250px]">
                        <Image src="/cs180project5mediaB/1_2_1_epoch_1_result.png" alt="1_2_1_epoch_1_result" width={230} height={100} className="w-[95%] h-auto" />
                        <p>UNet Results at Epoch 1</p>
                    </div>
                    <div className="float-left w-1/2 h-[250px]">
                        <Image src="/cs180project5mediaB/1_2_1_epoch_5_result.png" alt="1_2_1_epoch_5_result" width={230} height={100} className="w-[95%] h-auto" />
                        <p>UNet Results at Epoch 5</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[250px]">
                        <Image src="/cs180project5mediaB/1_2_2_image1.png" alt="1_2_2_image1" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Out-Of-Distribution Results 1</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[250px]">
                        <Image src="/cs180project5mediaB/1_2_2_image2.png" alt="1_2_2_image2" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Out-Of-Distribution Results 2</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[250px]">
                        <Image src="/cs180project5mediaB/1_2_2_image3.png" alt="1_2_2_image3" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Out-Of-Distribution Results 3</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">2 | Training a DDPM Denoising UNet</h3>
                <p>
                    In this part, time conditioning and then classifier conditioning are both added to the UNet model put together previously 
                    to turn it from just a denoiser to a diffusion model, giving it the ability to iteratively denoise an image such 
                    that it can even generate new images from noise. This can be done using a combination of the equations used to put 
                    together the iterative denoiser in Part A and L2 loss on predicted noise, rather than the resulting image, generated by 
                    the UNet model from the first section with some additional fully connected blocks at specific parts to enable the model to 
                    take in a time and later classifier as inputs to the model. The β value for the chosen 300 timesteps range from 0.0001 to 0.02 
                    evenly spaced apart, and the α values are the cumulative product of 1 minus the β values up to the timestep of each one.
                </p>

                <h3 className="text-xl font-bold">2.1 | Adding Time Conditioning to UNet</h3>
                <p>
                    To add time conditioning to UNet, fully connected blocks, which are just a linear function followed by a gelu function run 
                    on a timestep t, were added to the unflatten result and first upblock result. This allowed the model to account and adjust 
                    for the timestep whend deciding how much and what sort of noise there is. the fully connected blocks are run on a normalized 
                    t value to maximize effectiveness.
                </p>

                <h3 className="text-xl font-bold">2.2 | Training the UNet</h3>
                <p>
                    To train the UNet, a training algorithms is run using equations from Part A to calculate the resulting noise values at different 
                    timesteps. A batch size of 128 and 20 epochs were used to maximize the effectiveness of the new UNet. A hidden dimension of 64 
                    was selected. The Adam optimizer was used with an initial learning rate of 1e-3, and a scheduler with a learning rate decay of 0.1 ^ 1/num_epochs.
                    The loss to steps curve is shown below, with almost all the improvement at the beginning and everything after being quite gradual.
                </p>
                <div>
                    <div className="float-left w-full h-[500px]">
                        <Image src="/cs180project5mediaB/2_3_loss_curve.png" alt="2_3_loss_curve" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Plot of Loss per Step for Time Conditioning</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">2.3 | Sampling from the UNet</h3>
                <p>
                    Another algorithm was needed to properly sample the model, based on the iterative denoiser of Part A. The results of this model 
                    allowed for both the cleaning up of noisy images, including from a separate test set, and generation of new ones close to the 
                    original MNIST dataset. Examples of generating new images at epoch 5 and epoch 20 are shown below. The results of epoch 20 are 
                    slightly improved from the results of epoch 5, which makes sense as improvements became significantly more incremental after the 
                    first couple of epochs.
                </p>
                <div>
                    <div className="float-left w-1/2 h-[300px]">
                        <Image src="/cs180project5mediaB/2_3_epoch5.png" alt="2_3_epoch5" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Time-Conditioned UNet at Epoch 5</p>
                    </div>
                    <div className="float-left w-1/2 h-[300px]">
                        <Image src="/cs180project5mediaB/2_3_epoch20.png" alt="2_3_epoch20" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Time-Conditioned UNet at Epoch 20</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">2.4 | Adding Class Conditioning to UNet</h3>
                <p>
                    To complete the basic diffusion model, I added classifier based conditioning by ensuring the model could take a class as an input 
                    then use a one hot encoded result as an input to the fully connected block which would then be multiplies with the unflatten and 
                    upblock results before the time gets added to them. During training, the model is also set to ignore the classifier a tenth of the time.
                    The classifier is set up to take ten classes, the digits from 0 to 9, due to it being the MNIST set. The training algorithm is just 
                    slightly modified from the time conditioning model to take in the class on top of the image and timestep. The loss of this model is shown 
                    below.
                </p>
                <div>
                    <div className="float-left w-full h-[500px]">
                        <Image src="/cs180project5mediaB/2_5_loss_curve.png" alt="2_5_loss_curve" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Plot of Loss per Step for Class Conditioning</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold">2.5 | Sampling From the Class-Conditioned UNet</h3>
                <p>
                    One notable thing about using classifier based guidance is that on its own it is not very good (seen in Part A). As such, 
                    the unconditional noise predictions are needed as part of the sampling portion to ensure good results as seen in Part A. The 
                    γ value for this was set to 5.0. The results of the addition of class conditioned guidance is shown below for epoch 5 and epoch 
                    20. The differences are less stark than in previous examples, but the epoch 5 results are generally a bit thicker and one of them 
                    has a leftover artifact, just standing out on its own.
                </p>
                <div>
                    <div className="float-left w-full h-[300px]">
                        <Image src="/cs180project5mediaB/2_5_epoch5.png" alt="2_5_epoch5" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Class-Conditioned UNet at Epoch 5</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full h-[300px]">
                        <Image src="/cs180project5mediaB/2_5_epoch20.png" alt="2_5_epoch20" width={500} height={100} className="w-[500px] h-auto" />
                        <p>Class-Conditioned UNet at Epoch 20</p>
                    </div>
                </div>
            </div>
        </>
    )
}