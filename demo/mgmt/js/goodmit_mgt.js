var root_path = "/"+$(location).attr('pathname').split("/")[1]+"/demo/mgmt";

function from_confirm(f) {
	var url = root_path + "/_ajax/ajax_command";
	var formData = new FormData(f);
	$.ajax({
		url : url,
		type : 'POST',
		dataType : 'html',
		enctype : "multipart/form-data",
		processData : false,
		contentType : false,
		data : formData,
		//async : true, // true: 비동기, false : 동기
		success: function(res) {
			location.reload();
		},
		error: function(){  // 에러
			console.log(" error....... ");
		},
		beforeSend: function(){
			
		},
		complete: function(){
			form_reset(f);
		}
	});
}



function form_reset(f){
	f.reset();
}

function form_destory(f){
	$("#" + f.id + " input").each(function(){
		$(this).remove();
	});
}

function file_name_to_txt(object, target){
	var fileName = object.files[0].name;
	$("#" + target).html(fileName);
}

function inc_html_data(code, obj_id, d1, d2, d3, d4, d5){
	var url = root_path + "/_inc/inc_command";
	$.ajax({
		url : url,
		type : 'POST',
		dataType : 'html',
		data : { 
			"command_code" : code,
			"d1" : d1, 
			"d2" : d2, 
			"d3" : d3, 
			"d4" : d4, 
			"d5" : d5 
		},
		//async : true, // true: 비동기, false : 동기
		success: function(res) {
			$("#"+obj_id).html(res);
		},
		error: function(){  // 에러
			console.log(" error....... ");
		},
		beforeSend: function(){
			
		},
		complete: function(){
			Array.prototype.forEach.call(document.getElementsByClassName("js-switch-update"), function(i){
				var switchery = new Switchery(i, {
					color: '#26B99A'
				});
			})
			
		}
	});
}

function img_upload_dropzone(code){
	Dropzone.options.fileDropzone = { // The camelized version of the ID of the form element
		url : root_path+"/_ajax/ajax_command.php", 
		// The configuration we've talked about above
		autoProcessQueue : false,
		uploadMultiple : true,
		parallelUploads : 10,
		maxFiles : 10,
		dictRemoveFile : '<i class=\'fa fa-trash\'></i>',
		addRemoveLinks: true,
		acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
		params: {"command_code" : code},
		
		// The setting up of the dropzone
		init : function() {
			var myDropzone = this;
			var upload_btn = document.querySelector("#img-upload-btn");
			var cancel_btn = document.querySelector("#img-upload-cancel");
			var button_txt = document.querySelector(".dz-button");
			button_txt.innerText = "Drag & Drop 또는 클릭하여 업로드";
			
			// First change the button to actually tell Dropzone to process the queue.
			upload_btn.addEventListener("click", function(e) {
				// Make sure that the form isn't actually being sent.
				e.preventDefault();
				e.stopPropagation();
				myDropzone.processQueue();
			});
			
			cancel_btn.addEventListener("click", function(e){
				myDropzone.removeAllFiles(true);
			});
	
			// Listen to the sendingmultiple event. In this case, it's the sendingmultiple event instead
			// of the sending event because uploadMultiple is set to true.
			this.on("sendingmultiple", function() {
				// Gets triggered when the form is actually being sent.
				// Hide the success button or the complete form.
				$(upload_btn).hide();
				$(cancel_btn).hide();
			});
			this.on("successmultiple", function(files, response) {
				// Gets triggered when the files have successfully been sent.
				// Redirect user or notify of success.
				alert('업로드가 완료되었습니다.');
				cancel_btn.click();
				$(upload_btn).show();
				$(cancel_btn).show();
			});
			this.on("errormultiple", function(files, response) {
				// Gets triggered when there was an error sending the files.
				// Maybe show form again, and notify user of error
				alert('업로드가 실패하였습니다.');
				$(upload_btn).show();
				$(cancel_btn).show();
			});
		}
	}
}

function noteedit(btn, obj){
	var event = "this, '" + obj + "'"; 
	$("#" + obj).summernote({
		focus: true, 
		height: 500, 
		toolbar: [
			['fontname', [ 'fontname' ]],
			['fontsize', [ 'fontsize' ]],
			['color', [ 'color', 'forecolor', 'backcolor' ]],
			['fontstyle', [ 'bold', 'italic', 'underline' ]],
			['insert', [ 'table', 'picture' ]],
			['misc', [ 'undo', 'redo', 'codeview' ]]
		]
	});
	$(btn).removeAttr("onClick");
	$(btn).html("<i class=\"fa fa-edit\"></i> 저장")
	$(btn).attr("onClick", "notesave("+event+")");
}

function notesave(btn, obj){
	var markup = $("#" + obj).summernote('code');
	var event = "this, '" + obj + "'"; 
	top_slick();
	$("#" + obj).summernote('destroy');
	$(btn).removeAttr("onClick");
	$(btn).html("<i class=\"fa fa-edit\"></i> 편집")
	$(btn).attr("onClick", "noteedit("+event+")");
}
