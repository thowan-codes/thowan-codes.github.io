import React, {useRef} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type GalleryImage = {
    src: string;
    alt: string;
    caption?: string;
};

function GalleryItem({src, alt, caption}: GalleryImage) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const imageUrl = useBaseUrl(src);

    return (
        <>
            <figure className={styles.item}>
                <button
                    type="button"
                    className={styles.thumbnail}
                    onClick={() => dialogRef.current?.showModal()}
                    aria-label={`Enlarge: ${alt}`}
                >
                    <img src={imageUrl} alt={alt} loading="lazy" />
                </button>
                {caption && <figcaption>{caption}</figcaption>}
            </figure>

            <dialog ref={dialogRef} className={styles.dialog} aria-label={alt}>
                <button
                    type="button"
                    className={styles.close}
                    onClick={() => dialogRef.current?.close()}
                    aria-label="Close enlarged image"
                >
                    ✕
                </button>
                <img src={imageUrl} alt={alt} />
                {caption && <p>{caption}</p>}
            </dialog>
        </>
    );
}

export default function ImageGallery({images}: {images: GalleryImage[]}) {
    return (
        <div className={styles.gallery}>
            {images.map((image) => (
                <GalleryItem key={image.src} {...image} />
            ))}
        </div>
    );
}