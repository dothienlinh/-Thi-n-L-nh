import { Request, Response } from "express";
import Resource from "../models/resourceModel";

class ResourceController {
  async index(req: Request, res: Response) {
    try {
      const resources = await Resource.find();
      res.render("resources/index", { resources });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  create(req: Request, res: Response) {
    res.render("resources/create");
  }

  async store(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const newResource = new Resource({ name, description });
      await newResource.save();
      res.redirect("/resources");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async show(req: Request, res: Response) {
    try {
      const resource = await Resource.findById(req.params.id);
      if (resource) {
        res.render("resources/details", { resource });
      } else {
        res.status(404).send("Resource not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async edit(req: Request, res: Response) {
    try {
      const resource = await Resource.findById(req.params.id);
      if (resource) {
        res.render("resources/edit", { resource });
      } else {
        res.status(404).send("Resource not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const updatedResource = await Resource.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true }
      );
      if (updatedResource) {
        res.redirect("/resources");
      } else {
        res.status(404).send("Resource not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const deletedResource = await Resource.findByIdAndDelete(req.params.id);
      if (deletedResource) {
        res.redirect("/resources");
      } else {
        res.status(404).send("Resource not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default new ResourceController();
