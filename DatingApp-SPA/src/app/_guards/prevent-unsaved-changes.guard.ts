import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';


@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
   canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm('Are you sure? Any unsaved changes will be lost');
    }
    return true;
  }
}
