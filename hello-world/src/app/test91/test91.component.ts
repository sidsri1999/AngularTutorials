import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-test91',
  templateUrl: './test91.component.html',
  styles: [`
  .selected{
    background-color: green;
    color: red
  }
`]
})
export class Test91Component implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public selectedId: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      let selectedIdString = this.activatedRoute.snapshot.paramMap.get('departmentId') ;
      this.selectedId = selectedIdString!==null ?  parseInt(selectedIdString): 0;  
    });
  }

  departments = [
    {"id": 1, "name":"Angular"},
    {"id": 2, "name":"Node"},
    {"id": 3, "name":"MongoDB"},
    {"id": 4, "name":"Ruby"},
    {"id": 5, "name":"Bootstrap"}
  ];

  onSelect(department: any){
    // go to url, route parameter
    this.router.navigate(['/test92',department.id]);  // /test92/1
  }

  isDepartmentSelected(department: any){
    return department.id === this.selectedId;
  }

}
