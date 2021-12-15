package cat.iesmanacor.bootstrap5.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
   @GetMapping("/helloworld")
   public String get(){
       System.out.println("Entry inside hello world");
       return "home";
   }
}
