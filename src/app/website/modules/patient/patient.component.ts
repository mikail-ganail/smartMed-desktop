import { Component } from '@angular/core';
import { AnalyzeService } from '../../core/services/analyzes.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {
  currentResult: string = '';
  isOpenList: boolean[] = [];

  constructor(public readonly ass: AnalyzeService) {}

  ngOnInit(): void {
    this.ass.getAnswer().subscribe((data) => {
      this.isOpenList.push(false);
      // Предположим, что здесь вы получаете нужные данные
      this.updateResult();
    });
  }

  private updateResult() {
    this.currentResult = this.ass.getResultMessage(this.ass.timeSectionSig());
  }

  openAll(index: number) {
    this.isOpenList[index] = !this.isOpenList[index];
  }
}
