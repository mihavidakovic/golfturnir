import { useState, useEffect } from "react"
import { SRLWrapper } from "simple-react-lightbox";

export default function Gallery({ number }) {
    const [images, setImages] = useState()

    function getImages(num) {
        let all = []
        for (let index = 0; index < num; index++) {
            all.push({
                imageUrl: "http://images.24ur.com/media/images/golf-turnir/" + index + ".jpg",
                thumbUrl: "http://images.24ur.com/media/images/golf-turnir/thumbnails/" + index + ".jpg"
            })
        }

        setImages(all)

    }

    useEffect(() => {
        getImages(number)
    }, [])

    const options = {
        settings: {
            overlayColor: 'rgba(0, 0, 0, 0.9)',
        },
        caption: {},
        buttons: {
            showDownloadButton: false
        },
        thumbnails: {
            showThumbnails: false
        },
        progressBar: {},
    }

    if (images) {
        return (
            <SRLWrapper options={options}>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 md:px-0">
                    {images.map((image, i) => {
                        return (
                            <a key={i} href={image.imageUrl} className="">
                                <img src={image.thumbUrl} alt="" />
                            </a>
                        )
                    })}
                </div>
            </SRLWrapper>
        )
    } else {
        return (
            <>
                loading
            </>
        )
    }
}
