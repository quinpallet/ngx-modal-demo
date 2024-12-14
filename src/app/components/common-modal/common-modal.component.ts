import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './common-modal.component.html',
  styleUrl: './common-modal.component.scss'
})
export class CommonModalComponent {
  @Input() message!: string;
  @Input() buttons!: { label: string, callback: (res: string) => void }[];
  @Output() selectionChange = new EventEmitter<string>();

  modalRef = inject(BsModalRef);

  options = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption = '';

  onSelectionChange() {
    this.selectionChange.emit(this.selectedOption);
  }

  onButtonClick(button: { label: string, callback: (res: string) => void }) {
    button.callback(button.label); // Execute the button's callback
    this.modalRef.hide();
  }

  onClose() {
    this.selectionChange.complete(); // 通知を完了
    this.modalRef.hide();
  }
}
