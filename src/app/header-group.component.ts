import { Component, OnDestroy } from '@angular/core';
import { IHeaderGroupAngularComp } from 'ag-grid-angular';
import { IHeaderGroupParams } from 'ag-grid';

@Component({
  templateUrl: 'header-group.component.html',
  styleUrls: [
    './header-group.component.css'
  ]
})
export class HeaderGroupComponent implements IHeaderGroupAngularComp, OnDestroy {

  public params: IHeaderGroupParams;
  public expanded: boolean;

  agInit(params: IHeaderGroupParams): void {
    this.params = params;
    this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChanged.bind(this));
  }

  ngOnDestroy(): void {
    console.log('Destroying HeaderGroupComponent');
  }

  expandOrCollapse() {
    this.params.setExpanded(!this.expanded);
  }

  onExpandChanged() {
    this.expanded = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
  }
}
