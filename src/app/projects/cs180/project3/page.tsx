import Image from "next/image";

export default function Project1() {
    return (
        <>
            <title>CS 180 Project 3</title>
            <div className="font-sans m-5 max-w-[1000px] mx-auto space-y-2 px-8">
                <h1 className="text-4xl font-bold">CS 180 Project 3</h1>
                <p>Name: Brandon Wong</p>
                <h2 className="text-2xl font-bold">Overview</h2>
                <p>
                    The goal of Project 3 is to morph pairs of images of faces from one to another and anywhere in between, 
                    changing both shape and colors in differing amounts. By taking matching points in different images 
                    and enabling the triangles obtained from those points to morph into each other, faces can be 
                    manipulated and morphed in interesting ways to obtain a variety of results. The first three parts are 
                    developing the morph and morphing my face with a friends. The rest of the parts are doing interesting things 
                    with the results from previous parts.
                </p>
                <h2 className="text-2xl font-bold">Part 1: Defining Correspondences</h2>
                <p>
                    In this first part, the corresponding points between my face and my friend&apos;s face were placed in the pair of images. 
                    This was done using the labeling tool given in the project spec linked 
                    <a href="https://cal-cs180.github.io/fa23/hw/proj3/tool.html">here</a>. 
                    After obtaining the points, the Delaunay triangulation was calculated on the points from my face and applied to 
                    the points from both images.
                </p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/my_face_small.jpg" alt="my_face_small" width={240} height={100} className="w-[240px] h-auto" />
                        <p>My face</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/friends_face_small.jpg" alt="friends_face_small" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Friend&apos;s face</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/me_triangles.jpg" alt="me_triangles" width={240} height={100} className="w-[240px] h-auto" />
                        <p>My face with triangulated points</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/friend_triangles.jpg" alt="friend_triangles" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Friend&apos;s face with triangulated points</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Part 2: Computing the &quot;Mid-way&quot; Face</h2>
                <p>
                    In this part, the mid-way image of a morph between the two was calculated from the triangulation 
                    made in the previous part. The first step was to calculate the average shape of both images by 
                    finding the averages of the corresponding points obtained on them. The second step was warping both faces to that shape
                    by finding an affine trainsformation matrix converting each triangle into the next and using an inverse warp to avoid holes, 
                    applying this to every pixel within the triangle. 
                    The final step is averaging the colors of the corresponding triangular section interpolated via nearest neighbors 
                    to get the resulting colors for the average from the original images.
                </p>
                <div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project3media/my_face_small.jpg" alt="me_triangles" width={180} height={100} className="w-[180px] h-auto" />
                        <p>My Face</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project3media/average_face.jpg" alt="average_face" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Mid-way Face</p>
                    </div>
                    <div className="float-left w-1/3">
                        <Image src="/cs180project3media/friends_face_small.jpg" alt="friends_face_small" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Friend&apos;s Face</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Part 3: The Morph Sequence</h2>
                <p>
                    In this part, I finally put together the code for performing the morph based on the code for the average (the same thing 
                    except with warp fractions and dissolve fractions different from 0.5)
                    and used it to find the images for 43 evenly separated points in the morph between my face and my friend&apos;s face.
                    These points plus the original images to make 45 points were then put together into a 1.5 second gif displaying the morph 
                    sequence formed from 45 frames at 30 frames per second.
                </p>
                <div>
                    <Image src="/cs180project3media/me_to_friend.gif" alt="me_to_friend" width={400} height={100} className="w-[400px] h-auto" />
                    <p>Gif of my friend&apos;s face becoming my face</p>
                    <p>(The gif may not loop, if so, please reload the page to see morph again)</p>
                </div>
                <h2 className="text-2xl font-bold">Part 4: The &quot;Mean Face&quot; of a Population</h2>
                <p>
                    In this part, I used the spatially normalized frontal images with corresponding points already manually annotated 
                    for each image from the FEI Face Database linked <a href="https://fei.edu.br/~cet/facedatabase.html">here</a>. 
                    The images I used were 200 images of people facing the camera with neutral facial expressions, 100 male and 100 female images. 
                    The images were already annotated with 46 corresponding points in each image. The mean face was found from these images, 
                    and then I warped the shape of ten of the images to that average and shown below after their originals.
                </p>
                <div>
                    <div>
                        <Image src="/cs180project3media/average_of_faces.jpg" alt="average_of_faces" width={400} height={100} className="w-[400px] h-auto"/>
                        <p>Average of FEI Face Database Faces</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_0.jpg" alt="original_0" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 1</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_0.jpg" alt="example_0" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 1</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_1.jpg" alt="original_1" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 2</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_1.jpg" alt="example_1" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 2</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_2.jpg" alt="original_2" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 3</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_2.jpg" alt="example_2" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 3</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_3.jpg" alt="original_3" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 4</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_3.jpg" alt="example_3" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 4</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_4.jpg" alt="original_4" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 5</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_4.jpg" alt="example_4" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 5</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_5.jpg" alt="original_5" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 6</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_5.jpg" alt="example_5" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 6</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_6.jpg" alt="original_6" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 7</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_6.jpg" alt="example_6" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 7</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_7.jpg" alt="original_7" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 8</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_7.jpg" alt="example_7" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 8</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_8.jpg" alt="original_8" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 9</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_8.jpg" alt="example_8" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 9</p>
                    </div>
                </div>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/original_9.jpg" alt="original_9" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Original 10</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/faces_to_average_examples/example_9.jpg" alt="example_9" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Example 10</p>
                    </div>
                </div>
                <p>I also found the resulting image from my face converted into the geometry of the mean face and vice versa.</p>
                <div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/me_to_avg.jpg" alt="me_to_avg" width={240} height={100} className="w-[240px] h-auto" />
                        <p>My Face to Mean Face</p>
                    </div>
                    <div className="float-left w-1/2">
                        <Image src="/cs180project3media/avg_to_me.jpg" alt="avg_to_me" width={240} height={100} className="w-[240px] h-auto" />
                        <p>Mean Face to My Face</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Part 5: Caricatures: Extrapolating From the Mean</h2>
                <p>
                    In this part, I obtained a neutral expression caricature of my face using the average of neutral 
                    faces from the previous part and the equation result = im1_points + alpha * (im2_points - im1_points) 
                    to obtain the corresponding points for warping. I then put these new corresponding points through the 
                    rest of the standard morph function to obtain an exaggerate neutral expression face of my face based on 
                    the average neutral expression face, exaggerating the shape of the neutral expression face while having the colors 
                    of my own. This ended up as an exaggerated version of the my face to mean face of the previous part.
                </p>
                <div>
                    <Image src="/cs180project3media/frown_caricature.jpg" alt="frown_caricature" width={400} height={100} className="w-[400px] h-auto"/>
                    <p>Neutral Caricature of My Face</p>
                </div>
                <h2 className="text-2xl font-bold">Final Part: Changing Gender Bell and Whistle</h2>
                <p>
                    In this part, I used a mean east/southeast asian woman image found on google to try and switch the visible gender of my image 
                    (chosen since I&apos;m east asian myself). 
                    I found a variety of different morphs between them: one of just the shape, one of just the appearance, and one of both but not to 
                    the full extent. The morph of both (essentially the midpoint between the two images) appeard to have the best result. 
                    The results are shown below.
                </p>
                <div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project3media/me_resize.jpg" alt="me_resize" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Me</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project3media/me_to_woman_shape.jpg" alt="me_to_woman_shape" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Morph Shape</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project3media/me_to_woman_appearance.jpg" alt="me_to_woman_appearance" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Morph Appearance</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project3media/me_to_woman_both.jpg" alt="me_to_woman_both" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Morph Both</p>
                    </div>
                    <div className="float-left w-1/5">
                        <Image src="/cs180project3media/woman_resize.jpg" alt="woman_resize" width={180} height={100} className="w-[180px] h-auto" />
                        <p>Mean East Asian Woman</p>
                    </div>
                </div>
            </div>
        </>
    )
}