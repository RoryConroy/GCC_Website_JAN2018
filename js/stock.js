$(document).ready(function() {
var employee = [
        {
            'id':1,
		    'firstname': "Giant",
	        'lastname': "TDR",
	        'county':'Gorey',
	        'email':'fbloggs@gmail.com'
        },
        {
            'id':2,
			'firstname': "MountainBike",
		    'lastname': "Helmet",
		    'county':'Arklow',
		    'email':'kmalone@gmail.com'
	    },
        {
            'id':3,
			'firstname': "Trek",
		    'lastname': "SUPERB",
		    'county':'Gorey',
		    'email':'samdunne@gmail.com'
	    }
  ];

var source   = $("#some-template").html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(employee);
$("#content-placeholder").html(theCompiledHtml);

$('#emplist').submit(function() {
  newemp= {
	 id:$('#id').val(),
	 firstname:$('#firstname').val(),
	 lastname:$('#lastname').val(),
	 county:$('#county').val(),
	 email:$('#email').val()
  }

  employee.push(newemp);
  var theCompiledHtml = template(employee);
  $("#content-placeholder").html(theCompiledHtml);
  $('#modalForm').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
  $('input[type="email"]').val("");
  return false;
});
});