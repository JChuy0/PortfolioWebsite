import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class CloudFrontService {
    constructor() {}

    private masterManifestUrl = "https://d3p6lighdfhv6a.cloudfront.net/manifests/master_manifest.json";
    
        // retrieve the manifest and all files for the specified diorama
        async getFilesForSingleDiorama(name: string) {

        try {
            const manifestResponse = await fetch(this.masterManifestUrl);
            const json = await manifestResponse.json();

            let dioramaManifest = "";

            // loop through json to find diorama with the matching name
            for (let i = 0; i < json.dioramas.length; i++) {
                if (json.dioramas[i].name === name) {
                    dioramaManifest = (json.dioramas[i].url);
                    break;
                }
            }

            // fetch the diorama manifest
            const dioramaResponse = await fetch(dioramaManifest);
            const dioramaJson = await dioramaResponse.json();

            return dioramaJson;

        } catch (err) {
            console.error(err);
            throw new Error("Failed to fetch diorama manifest");
        }
    }


/*
    I decided to use manifests instead of the AWS SDK for a few reasons.
        It is simpler to use than the AWS SDK.
        It is safer since I don't have to worry about securing my API credentials.
        I don't need to install any packages or dependencies to use the fetch API.
        I can use AWS CloudFront to cache files and speed up load times.
*/
    // retrieve master manifest and photos manifest
    async getAllPhotosAndDioramas(){

        try {
            const manifestResponse = await fetch(this.masterManifestUrl);
            const json = await manifestResponse.json();

            let photosManifestUrl = json.photos_manifest;
            const photosResponse = await fetch(photosManifestUrl);
            const photosJson = await photosResponse.json();

            interface Dictionary { [key: string]: string; }
            let data: Dictionary = {};

            data['dioramas'] = json.dioramas;
            data['photos'] = photosJson.photos;

            return data;

        } catch (err) {
            console.error(err);
            throw new Error("Failed to fetch files from manifest");
        }
    }

}