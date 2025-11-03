package com.ecommerce.api.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ecommerce.api.model.Product;
import com.ecommerce.api.model.ProductImage;
import com.ecommerce.api.repository.ProductImageRepository;
import com.ecommerce.api.repository.ProductRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class ProductImageService {
    private ProductImageRepository productImageRepository;
    private ProductRepository productRepository;

    public ProductImageService(ProductImageRepository productImageRepository, ProductRepository productRepository) {
        this.productImageRepository = productImageRepository;
        this.productRepository = productRepository;
    }

    public List<ProductImage> getAllProductImages() {
        return productImageRepository.findAll();
    }

    public ProductImage getProductImageById(Long id) {
        return productImageRepository.findById(id).orElse(null);
    }

    public ProductImage saveImage(Long productId, String imageUrl, Integer sortOrder) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        ProductImage productImage = ProductImage.builder()
                .product(product)
                .url(imageUrl)
                .sortOrder(sortOrder)
                .build();

        return productImageRepository.save(productImage);
    }

    public ProductImage updateImage(Long id, MultipartFile file, Integer sortOrder) throws IOException {
        ProductImage productImage = productImageRepository.findById(id).orElse(null);
        if (productImage == null) {
            return null;
        }

        // Ruta absoluta donde guardar
        String uploadDir = "src/main/resources/static/images/";

        // Si tenía un archivo viejo -> eliminarlo
        if (productImage.getUrl() != null) {
            String oldFilePath = uploadDir + productImage.getUrl().replace("/images/", "");
            File oldFile = new File(oldFilePath);
            if (oldFile.exists()) {
                oldFile.delete();
            }
        }

        // Guardar nuevo archivo
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.write(filePath, file.getBytes());

        // Actualizar info en la entidad
        productImage.setUrl("http://localhost:8080/images/" + fileName);
        productImage.setSortOrder(sortOrder);

        return productImageRepository.save(productImage);
    }

    public boolean deleteProductImage(Long id) {
        if (productImageRepository.existsById(id)) {
            productImageRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
