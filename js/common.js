var editor = ace.edit("editor");
	editor.setTheme("ace/theme/sqlserver");
	editor.session.setMode("ace/mode/sqlserver");

	var result = ace.edit("result");
	result.setTheme("ace/theme/sqlserver");
	result.session.setMode("ace/mode/sqlserver");

	function yap(){
		result.setValue(editor.getValue());
	}
	function copySelection(){
		result.setValue(editor.session.getTextRange(editor.getSelectionRange()));
	}