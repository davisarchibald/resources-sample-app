import { website, podcast, book } from '../../common/images/data-images';

class HomeController {
  constructor(Resources) {
    "ngInject";
    this.resources = Resources.resources
    this.createEmptyResource = Resources.createEmptyResource;
    this.addResource = Resources.addResource;
    this.editResource = Resources.editResource;
    this.removeResource = Resources.removeResource;
    this.types = Resources.types;
    this.editNew = false;
    this.editCurrent = false;
    this.showAddResource = true;
    this.emptyResource = this.createEmptyResource();
    this.submitted = false;
    this.activeResource = null;
    this.images = { website, podcast, book };
  }
  saveResource(isEdit, index) {
      const { name, url, type } = this.emptyResource;
      this.submitted = true;
      if (!name || !url || !type) {
          return;
      }
      if(isEdit) {
          this.editResource(index, this.emptyResource);
      } else {
          this.addResource(this.emptyResource);
      }
      this.clearResource();
  }
  clearResource() {
      this.emptyResource = this.createEmptyResource();
      this.editNew = false;
      this.editCurrent = false;
      this.submitted = false;
      this.showAddResource = true;
  }
  handleHover(index) {
      if (index !== undefined) {
          this.activeResource = index;
          return;
      }
      this.activeResource = null;
  }
  _editResource(index) {
      if (index !== undefined) {
          this.emptyResource = this.resources[index];
          this.editCurrent = true;
      }
      this.editNew = true;
      this.showAddResource = false;
  }
  _removeResource(index) {
      this.removeResource(index);
  }
}

export default HomeController;
