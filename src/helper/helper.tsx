
const isDocumentationPage = (pathName: string) => {
    if(pathName.includes("/documentation")) return true;
    else return false;
}

const getActiveRoute = (id: number, pathName: string) =>{
    switch(id){
      case 1: return pathName === "/";
      case 2: return isDocumentationPage(pathName);
      default: return false;
    }
  }

export {isDocumentationPage, getActiveRoute}  