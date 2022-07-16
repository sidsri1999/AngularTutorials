import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-test92',
  templateUrl: './test92.component.html',
  styles: []
})
export class Test92Component implements OnInit {

  public departmentId : any;

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // the snapshot approach won't work, if we reuse the same component, i.e. by using next and previous it is again coming back to the same component. So, ngonit method is not going to execute.
    //let idString = this.activateRoute.snapshot.paramMap.get('id') ;
    //this.departmentId = idString!==null ?  parseInt(idString): 0;
    this.activateRoute.paramMap.subscribe((param: ParamMap) =>{
      let idString = this.activateRoute.snapshot.paramMap.get('id') ;
      this.departmentId = idString!==null ?  parseInt(idString): 0;  
    });
    
  }

  goPrevious(){
    let previousId = this.departmentId -1;
    //this.router.navigate(['/test92',previousId]);
    // using relative path, suppose if we changed the url from test92 to test93, then we need to change in each component, where that is used.
    // here from current path, we are moving one step back i.e. removing currentDepartmentId then after that adding previousId
    // we can also pass the optional parameter at the third position of array,
    // this.router.navigate(['../',previousId,{"test":"test"}], {relativeTo : this.activateRoute});
    // if required, and if we only need to append the id at last we can skip the first index too
    // this.router.navigate([previousId], {relativeTo : this.activateRoute});
    this.router.navigate(['../',previousId], {relativeTo : this.activateRoute});
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/test92',nextId]);
  }

  backToTest91Component(){
    let selectedDepartmentId = this.departmentId ? this.departmentId : null;
    this.router.navigate(["/test91",{"departmentId":selectedDepartmentId}]);
  }

  openOverview(){
    this.router.navigate(["test921"], {relativeTo: this.activateRoute});
  }

  openContact(){
    this.router.navigate(["test922"], {relativeTo: this.activateRoute});
  }

}
