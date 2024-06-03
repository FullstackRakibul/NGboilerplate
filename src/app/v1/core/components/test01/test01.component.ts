import { Component , OnInit  } from '@angular/core';
import { test01 } from '../../../interface/test01.Interface';
import { TestService01Service } from '../../../services/test-service01.service';

@Component({
  selector: 'app-test01',
  standalone: true,
  imports: [],
  templateUrl: './test01.component.html',
  styleUrl: './test01.component.less'
})
export class Test01Component implements OnInit {
    feature1Data: test01[] = [];

  constructor(private testService01: TestService01Service) { }

  ngOnInit(): void {
    this.testService01.getTestData().subscribe(data => {
      this.feature1Data = data;
    });
  }


}
