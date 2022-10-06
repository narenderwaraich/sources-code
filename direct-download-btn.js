//<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.js" integrity="sha512-UNbeFrHORGTzMn3HTt00fvdojBYHLPxJbLChmtoyDwB6P9hX5mah3kMKm0HHNx/EvSPJt14b+SlD8xhuZ4w9Lg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//<script>
    function forceDownload(e,file_url, file_name) {
    e.innerHTML = 'Downloading...';
    var x = new XMLHttpRequest();
    x.open("GET", file_url, true);
    x.responseType = 'blob';
    
    x.send();
    x.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    var obj = window.URL.createObjectURL(this.response);
                    x.onload = function(e){
                        saveAs(x.response, file_name, 'application/zip');
                    };
                    e.innerHTML = 'Download Preliminary Paperwork';
                    setTimeout(function() {
                        window.URL.revokeObjectURL(obj);
                    }, 60 * 1000);
                }
            };
}
//</script>