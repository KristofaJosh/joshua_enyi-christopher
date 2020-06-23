import axios from 'axios';
import {logErrorToMyService} from "../errorReport";


const WebsiteUrlToImage = async (access_key, upload_preset, url, width = 1440, height = 1080) => {
    let resolved_url = url.replace(/:/g, "%3A").replace(/\//g, "%2F");
    
    const getSnapShot = () => {
        console.log('get snapshot of webpage');
        return new Promise((resolve, reject) => {
            axios({
                url: `https://api.apiflash.com/v1/urltoimage?access_key=${access_key}&format=png&height=${height}&response_type=json&url=${resolved_url}&width=${width}`,
                method: "GET",
                responseType: "json",
            }).then((resp) => {
                resolve(resp)
            }).catch((err) => {
                logErrorToMyService(err);
                reject(err.message+'. Not Found, Did you forget to add http:// or https:// ?, remove trailing slash at the end of link */*')
            });
        })
    };
    
    const getImageUrl = async () => {
        let formData = new FormData();
        
        try{
            let snapLink = await getSnapShot();
            formData.append('file', snapLink.data.url);
            formData.append('upload_preset', upload_preset);
            
            console.log('save to cloudinary for constant request');
            
            return new Promise((resolve, reject) => {
                axios({
                    url: "https://api.cloudinary.com/v1_1/webweavers/upload",
                    method: "POST",
                    data: formData,
                }).then((resp) => {
                    resolve(
                        {link: resp.data.url.replace(/upload/g, "upload/w_600")}
                    )
                }).catch((err) => {
                    logErrorToMyService(err);
                    reject({error: err.message + '. Image was not created, try again'})
                })
            })
        }catch (err) {
            return {error: err}
        }
        
    };

    return await getImageUrl();
    
};

export default WebsiteUrlToImage;






