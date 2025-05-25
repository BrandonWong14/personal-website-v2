import Image from "next/image";

export default function Project1() {
    return (
        <>
            <title>CS 180 Project 3</title>
            <div className="font-sans m-5 max-w-[1000px] mx-auto space-y-2 px-8">
                <h1 className="text-4xl font-bold">CS 180 Project 4</h1>
                <p>Name: Brandon Wong</p>
                <h2 className="text-2xl font-bold">Part 4A: Image Warping and Mosiacing</h2>
                <p>
                    The goal of Project 4a is to warp images so that they can be stiched together into a single larger image with a single perspective. 
                    The first results of this part uses the described methods to rectify images, essentially converting images so that a part that should be a 
                    rectangle is displayed as one, warping the entire images so that it looks like its from the right perspective to see the rectangle as one 
                    correctly in the image. The second part warps images which are then manually aligned into a larger image.
                </p>
                <h3 className="text-xl font-bold">Shoot and Digitize Pictures</h3>
                <h4 className="font-bold">For Rectification</h4>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/box.jpg" alt="box" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Box</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/computer.jpg" alt="computer" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Computer</p>
                    </div>
                </div>
                <h4 className="font-bold">For Mosiacing</h4>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_left.jpg" alt="path_left" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_right.jpg" alt="path_right" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Right</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/dish_left.jpg" alt="dish_left" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Dishrack Left</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/dish_right.jpg" alt="dish_right" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Dishrack Right</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/split_left.jpg" alt="split_left" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Split Path Left</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/split_right.jpg" alt="split_right" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Split Path Right</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Recover Homographies</h3>
                <p>
                    To recover homographies, corresponding points were marked on the right and left images. For the images for rectification, the points that should be in a rectange 
                    were marked and than the rectanglular location of the points were manually input. This was done using the labeling tool given in the project spec linked 
                    <a href="https://cal-cs180.github.io/fa23/hw/proj3/tool.html">here</a>. Once the points were obtained, the homographies were computed using the least squared 
                    linear algebra function from numpy on the system of equations recovered from the matrix equation used to calculate homographies shown below. Inverse warping was then used 
                    by taking the inverse of the homography matrix and using that to calculate new warped images.
                </p>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/homography_eqs.png" alt="homography_eqs" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Homography Calculation Equation for Least Squares</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/homography_std.png" alt="homography_std" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Homography Equation Standard Form</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Warp the Images</h3>
                <h4 className="font-bold">Corresponding Points</h4>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/box_with_pts.jpg" alt="box_with_points" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Box Points</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/computer_with_pts.jpg" alt="computer_with_pts" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Computer Points</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/path_with_pts.jpg" alt="path_with_pts" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Points</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/dish_with_pts.jpg" alt="dish_with_points" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Dish Points</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/split_with_pts.jpg" alt="split_with_points" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Split Path Points</p>
                    </div>
                </div>
                <h4 className="font-bold">Image Rectification</h4>
                <p>
                    To rectify images, the homography matrix for inverse warping was found, then the warp function made in the previous project was used to warp 
                    the old image into the new image with linear interpolation. There was a weird result where the box became super zoomed out due to stretching.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/box_rectified.jpg" alt="box_rectified" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Box Rectified</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/box_rectified_zoom.jpg" alt="box_rectified_zoom" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Box Rectified, Zoomed In</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/computer_rectified.jpg" alt="computer_rectified" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Computer Rectified</p>
                    </div>
                </div>
                <h4 className="font-bold">Blend the Images into a Mosiac</h4>
                <p>
                    To create mosiacs, steps similar to the previous one were done. However, because the right side of the left image corresponds to the left side of the right image, 
                    the right corresponding points had to be shifted to ensure the full left image would be kept when warped. After that, the homographies could be calculated using those corresponding 
                    points. After that, the images could be put together onto a single larger image for a displayable combined result. To help remove some of the distinction between images as a 
                    result of differing brightness levels, multiresolution laplacian pyramid blending was used with the mask on the right image. The two images input were the warped left image and 
                    the combined image to prevent the black background on the rest of the image from causing issues in the blending. This helped slightly with the results.
                </p>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/path_left_warped.jpg" alt="path_left_warped" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Path Left Warped</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/path_mosiac.jpg" alt="path_mosiac" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Path Mosiac, No Blending</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/path_blended_mosiac.jpg" alt="path_blended_mosiac" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Blended Path Mosiac</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/dish_left_warped.jpg" alt="dish_left_warped" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Dishrack Left Warped</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/dish_mosiac.jpg" alt="dish_mosiac" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Dishrack Mosiac, No Blending</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/dish_blended_mosiac.jpg" alt="dish_blended_mosiac" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Dishrack Path Mosiac</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/split_left_warped.jpg" alt="split_left_warped" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Split Path Left Warped</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/split_mosiac.jpg" alt="split_mosiac" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Split Path Mosiac, No Blending</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/split_blended_mosiac.jpg" alt="split_blended_mosiac" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Split Path Mosiac</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Part 4B: Feature Matching for Autostitching</h2>
                <div>
                    The goal of Project 4b is to find corresponding features in two images so they can be automatically warped and stitched together without requiring a human 
                    to select corresponding points between them. This is done through first using a Harris Interest Point Detector to find points of interest. Then, Adaptive Non-Maximal Suppression 
                    is used to select a balanced distribution of them, primarily the best ones. After this distribution is found, a descriptor is extracted for each feature, which is then used to match 
                    the features to the closest ones from the other image using Lowe&apos;s approach.
                </div>
                <h3 className="text-xl font-bold">Autostitching the Path Images</h3>
                <h4 className="font-bold">Interest Point Detection</h4>
                <p>
                    Interest points were detected via corner detection using the Harris corner detector. A space of 40 pixels was left empty on each side for use in the feature descriptor extraction 
                    later. The result was a very dense set of interest points that needed further processing to select the best ones to use as corresponding points between images.
                </p>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/path_left_harris.jpg" alt="path_left_harris" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Path Left Harris Detector Results</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/path_left_harris_coord.jpg" alt="path_left_harris_coord" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Path Left Points of Interest</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project4media/path_left_harris_coord.jpg" alt="path_left_harris_coord" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Path Right Points of Interest</p>
                    </div>
                </div>
                <h4 className="font-bold">Adaptive Non-Maximal Suppression (ANMS)</h4>
                <p>
                    The sheer volume of points means some technique is needed to select an even distribution of the best ones to use that enables corresponding points to be found over 
                    a large section of the image without points doing the same thing or getting in each others way. ANMS finds radii around the points where they are the strongest, 
                    suppressing points that are significantly weaker points nearby and ensuring the remaining points are spread out around the image without being too close together.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_left_anms.jpg" alt="path_left_anms" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left ANMS Results</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_right_anms.jpg" alt="path_right_anms" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Right ANMS Results</p>
                    </div>
                </div>
                <h4 className="font-bold">Feature Descriptor Extraction</h4>
                <p>
                    To ensure the features at the remaining points left after ANMS is performed can be compared, descriptors of each feature had to be extracted. An 8 by 8 patch 
                    of pixels were extracted from an 80 by 80 pixel section of the image around each feature. Two examples of feature descriptors are shown below.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_left_feature_descriptor.jpg" alt="path_left_feature_descriptor" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left Feature Descriptor Example</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_right_feature_descriptor.jpg" alt="path_right_feature_descriptor" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Right Feature Descriptor Example</p>
                    </div>
                </div>
                <h4 className="font-bold">Feature Matching</h4>
                <p>
                    Features were matched using Lowe&apos;s approach, by finding the euclidean distance between the descriptors and finding the ratio of the euclidean distance of the nearest nearbor and the euclidean 
                    distance of the second nearest neighbor. Because points that are clearly corresponding would have a small ratio due to the second nearest neighbor likely being some random 
                    point much farther away, this allows for selecting the pairs most likely to be valid based on some threshold, and the outlier pairs that don&apos;t have valid corresponding points 
                    to be easily removed.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_left_matched.jpg" alt="path_left_matched" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left Corresponding Points</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_right_matched.jpg" alt="path_right_matched" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Right Corresponding Points</p>
                    </div>
                </div>
                <h4 className="font-bold">Random Sample Consensus (RANSAC)</h4>
                <p>
                    To finally select the best points to compute a homography with and compute that homography, 4-point RANSAC was used. Because there are still outliers even after using Lowe&apos;s trick, 
                    another method is needed to find and  remove any last outliers, leaving the points that correspond with results that best warp the points of one image such that they match 
                    the other image. RANSAC works by randomly sampling 4 pairs of points from the points left after the previous step at a time and computing a homography. This homography is then 
                    used on all the valid points and the points that are within a threshold distance to their corresponding points are placed together in a set, without the outliers. This is repeated, and the largest set 
                    is saved to be used as it means the computed homography was accurate over the most points. The full set of these valid points were then used to compute the actual homographies used 
                    to warp the images. The results for the left image are below.
                </p>
                <div>
                    <div className="float-left w-full">
                        <Image src="/cs180project4media/path_left_RANSAC.jpg" alt="path_left_RANSAC" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left RANSAC Results</p>
                    </div>
                </div>
                <h4 className="font-bold">Results</h4>
                <p>
                    The results for the three pairs of images mosiaced and blended together are shown below. The path and dishrack images are shown alongside the results from manual selection 
                    of corresponding points. While the path images did very well at around the same as the manual matching, the dishrack was distinctly off and I was unable to obtain closer results 
                    from the selected points.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_blended_mosiac_auto.jpg" alt="path_left_warped_auto" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left Autostitching Result</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/path_blended_mosiac.jpg" alt="path_left_warped" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Path Left Original Result</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/dish_blended_mosiac_auto.jpg" alt="dish_left_warped_auto" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Dish Left Autostitching Result</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/dish_blended_mosiac.jpg" alt="dish_left_warped" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Dish Left Original Result</p>
                    </div>
                </div>
                <p>
                    I couldn&apos;t get the images for the split path to match at all, generally due to the little dots in the trees causing various detected corners to look 
                    far too similar to each other. For the third image, I took a new pair of images from my school club&apos;s (Pioneers in Engineering) room which actually autostitched together pretty well but with a slight visible distortion 
                    still.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/101_left.jpg" alt="dish_left_warped_auto" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Student Club Room Left</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/101_right.jpg" alt="dish_left_warped" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Student Club Room Right</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/club_left_warped_auto.jpg" alt="dish_left_warped_auto" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Student Club Room Left Warped</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project4media/club_blended_mosiac_auto.jpg" alt="dish_left_warped" width={300} height={100} className="w-[300px] h-auto" />
                        <p>Student Club Room Autostitching Result</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold">What havve I learned?</h3>
                <p>
                    Automatic point detection has honestly been really cool to learn about and work on implementing. The several steps required that each do different things to shrink the number 
                    of possible corresponding points improve the next step have been really interesting; the fact that there is so much information that can be extracted and used from images 
                    to do things like figure out how they match has been really interesting to see in action.
                </p>
            </div>
        </>
    )
}