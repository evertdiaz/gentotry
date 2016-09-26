
$('#envio').on('click', function() {
	var $data = $('#registro input')
	var data = $.map($data, obj => obj.value)
	var sendInfo = {
           name: data[0],
           age: data[1],
           firstname: data[2],
           lastname: data[3],
           password: data[4]
        }

    $.post('/api/register', sendInfo, function(data, textStatus, jqXHR) {
    	if(textStatus) {
    		alert('Todo ok')
    		location.href = '/'
    	} 
    		else alert('Todo MAL')

    })
})