$(function(){
	function add_incomplete_list_handler(elem) {
		$(elem).mouseup(function(){
		var task_id = $(this).parent().attr("action").match(/\d+$/);
		var that = this;
		$.post("/tasks/" + task_id + ".json", { "_method" : "put", "id": task_id, "task[completed]": "1" }, function(data){
			if (data.task.completed) {
				remove_from_list(that);
				$("ul.complete_tasks").append(insert_completed_item(task_id, data.task.title));
				hide_submits();
				add_complete_list_handler($("ul.complete_tasks li:last input[type=checkbox]"));
			}
		}, "json")
		});
	}
	
	function add_complete_list_handler(elem){
		$(elem).mouseup(function(){
			var task_id = $(this).parent().attr("action").match(/\d+$/);
			var that = this;
			$.post("/tasks/" + task_id + ".json", { "_method" : "put", "id" : task_id, "task[completed]" : "0" }, function(data) {
				if (!data.task.completed) {
					remove_from_list(that);
					$("ul.incomplete_tasks").append(insert_incomplete_item(task_id, data.task.title));
					hide_submits();
					add_incomplete_list_handler($("ul.incomplete_tasks li:last input[type=checkbox]"));
				}
			}, "json");
		});
	}

	function remove_from_list(elem) {
		$(elem).parent().parent().remove();
	}

	function insert_completed_item(id, task) {
		return '<li><form action="/tasks/' + id + '" method="post"><div style="margin:0;padding:0;display:inline"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="a3+gkEKxdMCw63lPIJK7PIAisQa/sEJGkWw+9eqfYEc=" /></div>' +
		'<input name="task[completed]" type="hidden" value="0" /><input checked="checked" id="task_completed" name="task[completed]" type="checkbox" value="1" />' +
		'<label for="task_Eat dinner"> ' + task + '</label>' + 
		'<input name="commit" type="submit" value="Update" /></li>'
	}

	function insert_incomplete_item(id, task) {
		return '<li><form action="/tasks/' + id + '" method="post"><div style="margin:0;padding:0;display:inline"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="a3+gkEKxdMCw63lPIJK7PIAisQa/sEJGkWw+9eqfYEc=" /></div>' +
		'<input name="task[completed]" type="hidden" value="0" /><input id="task_completed" name="task[completed]" type="checkbox" value="1" />' +
		'<label for="task_Eat dinner"> ' + task + '</label>' + 
		'<input name="commit" type="submit" value="Update" /></li>'
	}

	
	function hide_submits() {
		$("ul.incomplete_tasks input[type=submit], ul.complete_tasks input[type=submit]").each(function(){
			$(this).hide();
		});
	}
	
	hide_submits();
	
	$("ul.complete_tasks input[type=checkbox]").each(function(){
		add_complete_list_handler(this);
	});
	
	$("ul.incomplete_tasks input[type=checkbox]").each(function(){
		add_incomplete_list_handler(this);
	});
});