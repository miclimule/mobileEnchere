import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

/**
 * 
 * @returns 
 * usePhotoGallery function to take photos
 */

// to store in the website
/*
export function usePhotoGallery() {

    // storing photos
    const [photos, setPhotos] = useState<UserPhoto[]>([]);

    // take photos
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });

        // store the photo taken in the webviewPath
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];
        setPhotos(newPhotos);

    };

    return {
        photos,
        takePhoto,
    };
}
*/

// to store in the fileSystem on MOBILE
export function usePhotoGallery() {

    const [photos, setPhotos] = useState<UserPhoto[]>([]);

    const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
        const base64Data = await base64FromPath(photo.webPath!);
        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Data,
        });

        // Use webPath to display the new image instead of base64 since it's
        // already loaded into memory
        return {
            filepath: fileName,
            webviewPath: photo.webPath,
        };
    };


    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });

        const fileName = 'photo - ' + new Date() + '.jpeg';
        const savedFileImage = await savePicture(photo, fileName);
        const newPhotos = [savedFileImage, ...photos];
        setPhotos(newPhotos);
    };

    return {
        photos,
        takePhoto,
    };
}

/**
 * 
 * @param path 
 * @returns 
    The base64FromPath method is a helper util 
    that downloads a file from the supplied path 
    and returns a base64 representation of that file.

 */
export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject('method did not return a string');
            }
        };
        reader.readAsDataURL(blob);
    });
}

/**
 * interface userphoto
 */
export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}