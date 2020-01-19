import { Component, OnInit, Input } from '@angular/core';
import { ClipboardService, IClipboardResponse } from 'ngx-clipboard';

@Component({
  selector: 'app-shortened-link',
  templateUrl: './shortened-link.component.html',
  styleUrls: ['./shortened-link.component.scss']
})
export class ShortenedLinkComponent implements OnInit {

  @Input() original: string;
  @Input() new: string;
  @Input() copied: boolean;

  constructor(private clipboardService: ClipboardService) {
    this.clipboardService.copyResponse$.subscribe((res: IClipboardResponse) => {
      if (res.isSuccess) {
        this.copied = res.content === this.new;
      }
    });
  }

  ngOnInit() {
  }

}
