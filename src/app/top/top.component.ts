import { Component, inject } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { CommonModalComponent } from '../components/common-modal/common-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  private modalService = inject(ModalService);

  modalRef?: BsModalRef; // モーダルの参照
  selectedOption = '';

  openModal() {
    this.modalRef = this.modalService.openModal(CommonModalComponent, {
      // message: 'OK?',
      buttons: [
        { label: 'OK', callback: (res: string) => console.log(res + '!!') },
        {
          label: 'Cancel',
          callback: () => {
            this.selectedOption = '';
            console.log('Cancel');
          },
        },
        { label: 'Dismiss', callback: (res: string) => console.log(res) },
      ],
      options: ['Option 1', 'Option 2', 'Option 3'],
      message: 'OK?',
    });

    const instance = this.modalRef.content as CommonModalComponent;
    instance.selectionChange.subscribe((option: string) => {
      this.selectedOption = option;
      console.log('Selected option:', option);
    });
  }
}
