import Image from "next/image";

export default function Project1() {
    return (
        <>
            <title>CS 180 Project 1</title>
            <div className="font-sans m-5 max-w-[1000px] mx-auto">
                <h1 className="text-4xl font-bold">CS 180 Project 1</h1>
                <p>Name: Brandon Wong</p>
                <div className="h-2 invisible"></div>
                <h2 className="text-2xl font-bold">Overview</h2>
                <p>
                    The goal of project 1 is to convert images taken with 3 separate color 
                    channels taken by Prokudin-Gorskii in the 20th century 
                    into a singular rgb color image with minimal leftover issues 
                    from converting several different images into one. Because the images 
                    were taken before color photos could be taken, they take the form 
                    of 3 separate images that need to be aligned and cleaned up with 
                    various computer vision techniques to convert them into modern 
                    color images.
                </p>
                <div className="h-2 invisible"></div>
                <h2 className="text-2xl font-bold">Alignment</h2>
                <h3 className="text-xl font-bold">Splitting</h3>
                <p>
                    Most of the images are split in one way. First, the original image is loaded 
                    from the file. Then, this original image is cropped by two-thirds of a percent 
                    on each side. After that, the separate channel images are split apart by taking 
                    the first third, second third, and last third of the original image and assigning 
                    them to blue, green, and red respectively. This channel images are then cropped 
                    by five percent on each side to obtain the final blue, green, and red channel images.
                </p>
                <p>
                    There is one exception to this. The cathedral image isn&apos;t cropped at all before being
                    aligned. This is the original method I used for all the .jpg images, but I found that
                    this caused issues for the monastery image so I stuck with the method I used for .tif
                    images for all of the images except the cathedral image, where cropping caused issues 
                    instead. As such, the cathedral image is the sole image that does not get cropped before
                    alignment. Margins are instead removed after processing, which is already done anyways
                    for all the jpg images.
                </p>
                <div className="h-2 invisible"></div>
                <h3 className="text-xl font-bold">Aligning</h3>
                <p>
                    The channels are aligned by finding the L2 norm, also known as the Euclidian Distance, 
                    of the red and blue images individually with the green image.
                </p>
                <p>
                    In the case of the .jpg images, different paddings using np.pad are applied to the red and blue images 
                    before their Euclidean Distance with the green image is found. The paddings that result 
                    in the smallest L2 norm are the ones selected to be used in the final alignment, and then 
                    the margins are removed from the final image to keep just the aligned parts in the final 
                    result.
                </p>
                <p>
                    In the case of the .tif images, pyramid alignment was used with rolling instead of padding 
                    the images. Using np.roll, the optimal alignments based on the L2 norm first on images 1/64 of the original size, 
                    then on images 1/16 of the original size and aligned based on the result from the 1/64 size 
                    alignment, then on images 1/4 of the size based on the results from the 1/64 and 1/16 alignments 
                    are found and applied to the original image to ensure the optimal alignments for the red and blue 
                    images with the green image can be found in a timely manner. Trying to find the alignment with the optimal 
                    L2 norm on the images at full size and half size were found to take to long to be reasonable, while 
                    using all three smaller sizes takes at most five minutes total per alignment. By basing the final alignment 
                    based on the total results from the three smaller ones, and optimal point can be found within a reasonable 
                    time frame for each image with no noticeable off alignments the majority of the time.
                </p>
                <div className="h-2 invisible"></div>
                <h2 className="text-2xl font-bold">Issues</h2>
                <p>
                    While most images ended up aligning perfectly, a small number of images were still off after the alignments were 
                    done. The most distinctly off image was the self_portrait images. The train, emir, and lady images were also 
                    off, but to a lesser extent that isn&apos;t as distinct and obvious as the first one.
                </p>
                <p>
                    I believe these issues stem primarily from the alignment being unable to reach the precision needed to avoid being 
                    slightly off on images with fewer issues. Because even the highest level of precision in still as a four times 
                    reduced size, being slightly off should not be too unexpected. This may be the issue for the images that are more 
                    disticntly wrong as well, except in a slightly different way. In their cases, the alignment goes too far on the smaller 
                    sizes, and when they move up to the larger sizes, the alignment rolling no longer has the range to find the true optimal 
                    point, as the smaller sizes adjust the images by four times as much as the next size up. This results in alignments 
                    that prevent the final one from ever finding the true optimal value, ending up with final images that are off.
                </p>
                <div className="h-2 invisible"></div>
                <h2 className="text-2xl font-bold">Images</h2>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/cathedral.jpg" alt="cathedral" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (12, 5)
                        </p>
                        <p>
                            Blue Offset: (5, 5)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/monastery.jpg" alt="monastery" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (7, 5)
                        </p>
                        <p>
                            Blue Offset: (12, 3)
                        </p>
                    </div>
                </div>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/tobolsk.jpg" alt="tobolsk" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (5, 5)
                        </p>
                        <p>
                            Blue Offset: (4, 2)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/harvesters.jpg" alt="harvesters" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (20, -4)
                        </p>
                        <p>
                            Blue Offset: (-8, -12)
                        </p>
                    </div>
                </div>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/icon.jpg" alt="icon" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (0, 4)
                        </p>
                        <p>
                            Blue Offset: (0, -16)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/lady.jpg" alt="lady" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (16, 20)
                        </p>
                        <p>
                            Blue Offset: (0, 12)
                        </p>
                    </div>
                </div>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/melons.jpg" alt="melons" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (52, 0)
                        </p>
                        <p>
                            Blue Offset: (-44, 0)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/church.jpg" alt="church" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (-4, -12)
                        </p>
                        <p>
                            Blue Offset: (0, -4)
                        </p>
                    </div>
                </div>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/onion_church.jpg" alt="onion_church" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (12, 8)
                        </p>
                        <p>
                            Blue Offset: (-12, -28)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/sculpture.jpg" alt="sculpture" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (64, -16)
                        </p>
                        <p>
                            Blue Offset: (8, 0)
                        </p>
                    </div>
                </div>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/self_portrait.jpg" alt="self_portrait" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (0, 0)
                        </p>
                        <p>
                            Blue Offset: (-8, 8)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/three_generations.jpg" alt="three_generations" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (20, 0)
                        </p>
                        <p>
                            Blue Offset: (-16, -16)
                        </p>
                    </div>
                </div>
                <div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/emir.jpg" alt="emir" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (0, 16)
                        </p>
                        <p>
                            Blue Offset: (0, -20)
                        </p>
                    </div>
                    <div className="float-left h-[600px] w-1/2">
                        <Image src="/cs180project1media/train.jpg" alt="train" width={490} height={100} style={{ width: '490px', height: 'auto' }} />
                        <p>
                            Red Offset: (32, 0)
                        </p>
                        <p>
                            Blue Offset: (-8, 0)
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}