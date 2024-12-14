import { inject, Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalService = inject(BsModalService);

  // openModal(component: any, modalData: any = {}, options: NgbModalOptions = {}): NgbModalRef {
  //   const modalRef = this.modalService.open(component, {
  //     backdrop: 'static',
  //     centered: true,
  //     ...options,
  //   });

  //   // 渡すデータが存在すればインスタンスに割り当て
  //   if (modalData) {
  //     Object.keys(modalData).forEach((key) => {
  //       modalRef.componentInstance[key] = modalData[key];
  //     });
  //   }

  //   return modalRef;
  // }

  openModal(component: any, modalData: any = {}, options: ModalOptions = {}): BsModalRef {
    const modalRef = this.modalService.show(component, {
      // backdrop: 'static',
      // class: 'modal-dialog-centered',
      ...options,
      initialState: modalData, // 初期データを設定
    });

    return modalRef;
  }
}
