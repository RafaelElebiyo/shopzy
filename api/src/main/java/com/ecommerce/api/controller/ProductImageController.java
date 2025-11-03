package com.ecommerce.api.controller;

import com.ecommerce.api.model.ProductImage;
import com.ecommerce.api.service.ProductImageService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/product-images")
public class ProductImageController {

    private final ProductImageService productImageService;

    public ProductImageController(ProductImageService productImageService) {
        this.productImageService = productImageService;
    }

    @GetMapping("")
    public List<ProductImage> getAllProductImages() {
        return productImageService.getAllProductImages();
    }

    @PostMapping("")
    public ResponseEntity<ProductImage> uploadProductImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("productId") Long productId,
            @RequestParam(value = "sortOrder", defaultValue = "0") Integer sortOrder) {
        try {
            // Ruta absoluta donde guardar (ej: static/images)
            String uploadDir = "src/main/resources/static/images/";

            // Crear directorio si no existe
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Nombre único para el archivo
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir + fileName);

            // Guardar el archivo físicamente
            Files.write(filePath, file.getBytes());

            // URL accesible desde el navegador
            String imageUrl = "http://localhost:8080/images/" + fileName;

            // Crear entidad ProductImage
            ProductImage savedImage = productImageService.saveImage(productId, imageUrl, sortOrder);

            return ResponseEntity.status(HttpStatus.CREATED).body(savedImage);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ProductImage getProductImageById(@PathVariable Long id) {
        return productImageService.getProductImageById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductImage> updateProductImage(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "sortOrder", defaultValue = "0") Integer sortOrder) {
        try {
            ProductImage updatedImage = productImageService.updateImage(id, file, sortOrder);
            if (updatedImage == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(updatedImage);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteProductImage(@PathVariable Long id) {
        productImageService.deleteProductImage(id);
    }
}
