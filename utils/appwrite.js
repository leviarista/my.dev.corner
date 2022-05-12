import { Appwrite } from "appwrite";

let sdk = new Appwrite();

sdk.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    ;

export const listFiles = bucketId => {
    return sdk.storage.listFiles(bucketId);
}

export const getFile = (bucketId, fileId) => {
    return sdk.storage.getFile(bucketId, fileId);
}

export const getFileView = (bucketId, fileId) => {
    return sdk.storage.getFileView(bucketId, fileId);
}

export const getFilePreview = (bucketId, fileId, params) => {
    if (params) {
        const { width } = params;
        return sdk.storage.getFilePreview(bucketId, fileId, width);
    }
    return sdk.storage.getFilePreview(bucketId, fileId);
}

