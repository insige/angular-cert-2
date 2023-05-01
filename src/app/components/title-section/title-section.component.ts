import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss'],
})
export class TitleSectionComponent implements OnInit {
  @Input() title?: string = '';
  @Input() abbreviation?: string = '';
  @Input() conference?: string = '';
  @Input() hasClose: boolean = false;
  @Output() closeCard: EventEmitter<void> = new EventEmitter();

  idCross: string = '';
  constructor() {}

  ngOnInit(): void {
    this.idCross = 'remove' + this.abbreviation;
  }

  closeEvent() : void{
    this.closeCard.emit();
    console.log('close')
  };
}
