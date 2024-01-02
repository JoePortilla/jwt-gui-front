import {Component} from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  componentToShow: string = 'welcome';

  constructor(private axiosService: AxiosService) {
  }

  showComponent(componentToShow: string) {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any) {
    // Request the login endpoint
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      })
        .then(
          response => {
            // console.log("password", response.data.password);
            this.axiosService.setAuthToken(response.data.password);
            this.componentToShow = "messages";
          }).catch(error => {
        this.axiosService.setAuthToken(null);
        this.componentToShow = "welcome";
      }
    );

  }

  onRegister(input: any) {
    // Request the register endpoint
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }).then(
      response => {
        // console.log("password", response.data.password);
        this.axiosService.setAuthToken(response.data.password);
        this.componentToShow = "messages";
      }).catch(
      error => {
        this.axiosService.setAuthToken(null);
        this.componentToShow = "welcome";
      }
    );
  }


}
