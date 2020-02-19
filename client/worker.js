console.log('Service Woker Loaded');
self.addEventListener('push',e=>{
const data=e.data.json();
console.log('Push is being recieved');
self.registration.showNotification(data.title,{
    'body':'Notified by Omers',
    'icon':'https://www.shutterstock.com/image-vector/retro-vintage-insignias-logotypes-set-vector-217636597'
});
});