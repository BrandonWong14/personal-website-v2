import Image from "next/image";

export default function Project1() {
    return (
        <>
            <title>CS 180 Final Project</title>
            <div className="font-sans m-5 max-w-[1000px] mx-auto space-y-2 px-8">
                <h1>CS 180 Final Project</h1>
                <p>Name: Brandon Wong</p>
                <h2>Section 1: Poor Man&apos;s Augmented Reality</h2>
                <p>
                    In this section I projected a 3d cube onto a short video by identifying keypoints to track throughout the video to define a 
                    world space that could be used to figure out where the cube should be in each frome in the image space.
                </p>

                <h3>0 | Setup</h3>
                <p>
                    For the setup, I just took a 30 second video of a shoebox with a grid on it so that keypoints could be identified and tracked 
                    on it.
                </p>
                <div>
                    <div className="float-left w-full h-[400px]">
                        <video src="/cs180finalprojectmedia/box.mov" className="w-[500px]" controls autoPlay muted>
                            <source src="/cs180finalprojectmedia/box.mov" type="video/mov" />
                        </video>
                        <p>Original Video</p>
                    </div>
                </div>

                <h3>1 | Keypoints</h3>
                <p>
                    After taking the video, I selected keypoints in the first frame of the video based on the marked grid I made on the box plus the 
                    corners. Once the image space coordinates and their respective world coordinates based on a 3d world space with the origin, (0, 0, 0) being 
                    at the bottom left corner of the papaer, were selected, a medianflow tracker was used for each point in the image space to find 
                    each point in the next frame&apos;s image space, allowing the points coordinates in each frame to be found and saved. The coordinates for 
                    points 7, 17, 19, 30, 33, 35 were found to be innacurate, so they were left out leaving 30 points to find the conversion matrix between 
                    world space and image space for. The video&apos;s frames per second were doubled to halve the length of the video.
                </p>
                <div>
                    <div className="float-left w-full h-[400px]">
                        <video src="/cs180finalprojectmedia/box_with_points.mp4" className="w-[500px]" controls autoPlay muted>
                            <source src="/cs180finalprojectmedia/box_with_points.mp4" type="video/mp4" />
                        </video>
                        <p>Box with Points Video</p>
                    </div>
                </div>

                <h3>2 | Calibrating the Camera</h3>
                <p>
                    One the image points for each image had been obtained, I could use least squares to obtain a conversion matrix from 4D world 
                    space to 3D image point space, which could then be converted into the 2D image space by dividing the x and y values by the z 
                    values. By calibrating the camera by finding such a conversion matrix from the world space to each individual image, the 
                    location of any point added to the world space could be found in each image by multiplying it by each images calibration matrix.
                    Both the standard form of the matrix and the form used with least squares to find the values of the matrix are shown below.
                </p>
                <div>
                    <div className="float-left w-1/2 h-[360px]">
                        <Image src="/cs180finalprojectmedia/conversion_matrix.png" alt="conversion_matrix" width={500} height={100} className="w-[95%] h-auto" />
                        <p>Calibrated Matrix Equation</p>
                    </div>
                    <div className="float-left w-1/2 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lstsqform.png" alt="lstsqform" width={500} height={100} className="w-[95%] h-auto" />
                        <p>Form to Solve Using Least Squares</p>
                    </div>
                </div>

                <h3>3 | Projecting a Cube in the Scene</h3>
                <p>
                    The last step is to take the corner points of some cube in the world space and find where they would be in each individual 
                    image using the matrices for each image obtained in the last part. These corners could then be used to draw each cube in 
                    each image, resulting in a video with an additional cube in it shown below. The video&apos;s frames per second were doubled to 
                    halve the length of the video.
                </p>
                <div>
                    <div className="float-left w-full h-[400px]">
                        <video src="/cs180finalprojectmedia/box_with_cube.mp4" className="w-[500px]" controls autoPlay muted>
                            <source src="/cs180finalprojectmedia/box_with_cube.mp4" type="video/mp4" />
                        </video>
                        <p>Box with Points Video</p>
                    </div>
                </div>

                <h2>Section 2: Lightfield Camera</h2>
                <p>
                    In this section I used image sets from the <a href="http://lightfield.stanford.edu/lfs.html">Stanford Lightfield Archive</a> to 
                    obtain images that appear to have different levels of depth refocusing and aperture adjustment through simple techniques such 
                    as shifting and averaging. I also implemented interactive refocusing which allows different views from which the image is focused 
                    on to be changed.
                </p>

                <h3>1 | Depth Refocusing</h3>
                <p>
                    I first averaged all the images to obtain a result that focuses on fair away points, with closer points being blurrier. After that, 
                    I depth refocusing by taking the position of each image relative to the center image, obtaining an estimate of the distance from the 
                    center image by subtracting 8 (approximately half, the size in each direction, rounded down, for some reason I thought I needed to 
                    use whole numbers in this part), multiplying this result by a shift value to set how much to shift by, and then averaging all the 
                    resulting images. The larger the shift value, the closer the focus appears to be in each resulting image. The averaged images followed 
                    by the results of depth refocusing at shifts of 0.5, 1.5, and 2.5 are shown below.
                </p>
                <div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/chess_average.jpg" alt="chess_average" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Chess Averaged Image</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_chess_05.jpg" alt="refocused_chess_05" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 0.5</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_chess_15.jpg" alt="refocused_chess_15" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 1.5</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_chess_25.jpg" alt="refocused_bracelet_25" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 2.5</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/lego_average.jpg" alt="lego_average" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Lego Average Image</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_lego_05.jpg" alt="refocused_lego_05" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 0.5</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_lego_15.jpg" alt="refocused_lego_15" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 1.5</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_lego_25.jpg" alt="refocused_lego_25" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 2.5</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/bracelet_average.jpg" alt="bracelet_average" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Bracelet Averaged Image</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_bracelet_05.jpg" alt="refocused_bracelet_05" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 0.5</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_bracelet_15.jpg" alt="refocused_bracelet_15" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 0.5</p>
                    </div>
                    <div className="float-left w-1/4 h-[300px]">
                        <Image src="/cs180finalprojectmedia/refocused_bracelet_25.jpg" alt="refocused_bracelet_25" width={230} height={100} className="w-[95%] h-auto" />
                        <p>Refocused 0.5</p>
                    </div>
                </div>

                <h3>2 | Aperture Adjustment</h3>
                <p>
                    Aperture adjustment was implemented by taking depth refocusing and then just selecting the images within a specified distance 
                    of the center image. This resulted in images that appeared more focused on specific parts while blurrier everywhere else as the 
                    selected maximum distance images could be at went up. The results of selecting apertures of 1, 4, and 7 are shown below, each with 
                    a depth refocusing shift value of 1.5.
                </p>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/chess_aperture_1.jpg" alt="chess_aperture_1" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Chess Aperture 1</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/chess_aperture_4.jpg" alt="chess_aperture_4" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Chess Aperture 4</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/chess_aperture_7.jpg" alt="chess_aperture_7" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Chess Aperture 7</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lego_aperture_1.jpg" alt="lego_aperture_1" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Lego Aperture 1</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lego_aperture_4.jpg" alt="lego_aperture_4" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Lego Aperture 4</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lego_aperture_7.jpg" alt="lego_aperture_7" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Lego Aperture 7</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/bracelet_aperture_1.jpg" alt="bracelet_aperture_1" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Bracelet Aperture 1</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/bracelet_aperture_4.jpg" alt="bracelet_aperture_4" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Bracelet Aperture 4</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/bracelet_aperture_7.jpg" alt="bracelet_aperture_7" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Bracelet Aperture 7</p>
                    </div>
                </div>

                <h3>3 | Interactive Refocusing</h3>
                <p>
                    Interactive refocusing was implemented by changing depth refocusing from moving each image based on distance from the center to 
                    moving each image based on distance from the selected point. By taking a point in an image and adjusting the scale to be within 
                    the scale of 17 images in each direction, the new point can be set to be a value within this range and each image can be shifted 
                    toward this new chosen point rather than the center of the center image. This allows images that look like they are from slightly 
                    different perspectives, changing the direction of the depth and the resulting focus. The adjustments are still pretty slight, but 
                    it&apos;s clear there are different perspectives. The examples shown below are perspectives from the top right, top left, and bottom middle.
                </p>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/chess_inter_refocus_topleft.jpg" alt="chess_inter_refocus_topleft" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Chess Top Left</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/chess_inter_refocus_topright.jpg" alt="chess_inter_refocus_topright" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Chess Top Right</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/chess_inter_refocus_botmid.jpg" alt="chess_inter_refocus_botmid" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Chess Bottom Middle</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lego_inter_refocus_topleft.jpg" alt="lego_inter_refocus_topleft" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Lego Top Left</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lego_inter_refocus_topright.jpg" alt="lego_inter_refocus_topright" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Lefo Top Right</p>
                    </div>
                    <div className="float-left w-1/3 h-[360px]">
                        <Image src="/cs180finalprojectmedia/lego_inter_refocus_botmid.jpg" alt="lego_inter_refocus_botmid" width={310} height={100} className="w-[95%] h-auto" />
                        <p>Lego Bottom Middle</p>
                    </div>
                </div>
            </div>
        </>
    )
}