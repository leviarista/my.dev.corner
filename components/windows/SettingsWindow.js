import React, { useEffect, useState } from 'react'
import { getFilePreview, getFileView, listFiles } from '../../utils/appwrite';
import Window from './Window'

const SettingsWindow = ({ isOpenned, closeSettingsWindow, setBackgroundType, setBackgroundValue }) => {

    const handleChangeColorInput = (e) => {
        setBackgroundType('color');
        setBackgroundValue(e.target.value);
        localStorage.setItem('_background', JSON.stringify({ type: 'color', value: e.target.value }));
    }

    const handleClickImageOption = (value) => {
        setBackgroundType('image');
        setBackgroundValue(value);
        localStorage.setItem('_background', JSON.stringify({ type: 'image', value: value }));
    }

    const handleClickVideoOption = (value) => {
        setBackgroundType('video');
        setBackgroundValue(value);
        localStorage.setItem('_background', JSON.stringify({ type: 'video', value: value }));
    }

    const [bgImages, setBgImages] = useState(['/img/defaultImageBg.jpg']);
    const [bgImagesThumbnails, setBgImagesThumbnails] = useState(['/img/defaultImageBgThumbnail.jpg']);

    const [bgVideos, setBgVideos] = useState(['/videos/defaultVideoBg.webm']);
    const [bgVideosThumbnails, setBgVideosThumbnails] = useState(['/img/defaultImageBgThumbnail.jpg']);

    useEffect(() => {
        const bgImagesBucketId = process.env.NEXT_PUBLIC_APPWRITE_BG_IMAGES_BUCKET;
        listFiles(bgImagesBucketId)
            .then(function (response) {
                let imagesTmp = [], thumbnailsTmp = [];
                response.files.forEach(file => {
                    let image = getFileView(bgImagesBucketId, file.$id)
                    let thumbnail = getFilePreview(bgImagesBucketId, file.$id, { width: 170 })
                    imagesTmp.push(image.href)
                    thumbnailsTmp.push(thumbnail.href)
                });
                setBgImages(imagesTmp);
                setBgImagesThumbnails(thumbnailsTmp);
            }, function (error) {
                console.log(error);
            });

        const bgVideosBucketId = process.env.NEXT_PUBLIC_APPWRITE_BG_VIDEOS_BUCKET;
        listFiles(bgVideosBucketId)
            .then(function (response) {
                let videosTmp = [], thumbnailsTmp = [];
                response.files.forEach(file => {
                    if (file.mimeType === 'image/jpeg') {
                        let thumbnail = getFilePreview(bgVideosBucketId, file.$id, { width: 170 })
                        thumbnailsTmp.push(thumbnail.href)
                    } else {
                        let video = getFileView(bgVideosBucketId, file.$id)
                        videosTmp.push(video.href)
                    }
                });
                videosTmp = videosTmp.sort();
                setBgVideos(videosTmp);
                thumbnailsTmp = thumbnailsTmp.sort();
                setBgVideosThumbnails(thumbnailsTmp);
            }, function (error) {
                console.log(error);
            });
    }, [])

    return (
        isOpenned &&
        <Window title={'Settings'} width={700}
            className={'settings-window'}
            zIndex={1001}
            closeWindow={closeSettingsWindow}
        >
            <div style={{ textAlign: 'center' }}>
                <em>Select a color</em>
                <div>
                    <div>
                        {/* <label htmlFor='main-bg-color'>Select a color:</label> */}
                        <input type="color" id="bg-color-input" name="favcolor" onChange={handleChangeColorInput} />
                    </div>
                </div>
                <em>... image</em>
                <div>
                    {bgImagesThumbnails.map((image, index) =>
                        <img src={image} width={170} key={index}
                            className='bg-image-option'
                            onClick={() => handleClickImageOption(`url('${bgImages[index]}')`)}
                            alt='bg-image'
                        />
                    )}
                </div>
                <em>or video</em>
                <div>
                    {bgVideosThumbnails.map((video, index) =>
                        <img src={video} width={200} key={index}
                            className='bg-image-option'
                            onClick={() => handleClickVideoOption(`${bgVideos[index]}`)}
                            alt='bg-video'
                        />
                    )}
                </div>
            </div>
        </Window >
    )
}

export default SettingsWindow;