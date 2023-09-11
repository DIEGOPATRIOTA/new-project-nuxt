<template>
<div>
    {{getStatus()}}
</div>
</template>

<script>
import rest from '../utils/HttpRequest';

export default {
    methods: {
        getStatus() {
                return new Promise((resolve, reject) => {
                    rest.getVersionApi().then(resp => {    
                    if(resp.data.appVersion){                        
                        resolve({ application: "UP" });         
                    }     
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
}
</script>
