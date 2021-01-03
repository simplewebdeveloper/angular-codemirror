import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Code } from './models/code.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-codemirror-app';
  code_editor_form: FormGroup;
  code_model = new Code();

  codeMirrorOptions: any = {
    theme: 'dracula',
    mode: 'jinja2',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    autoRefresh: true,
  };

  constructor(
    public form_builder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initialize_code_editor_form();
   }

   initialize_code_editor_form(): void {
    this.code_editor_form = this.form_builder.group({
      name: this.code_model.name,
      code: this.code_model.code,
    })
  }

  code_form_submit() {
    const form_data = this.code_editor_form.getRawValue();
    console.log(form_data);
  }

}
