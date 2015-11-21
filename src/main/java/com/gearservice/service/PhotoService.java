package com.gearservice.service;

import com.gearservice.model.cheque.Photo;
import com.gearservice.model.repositories.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.toList;

@Service
public class PhotoService {

    @Autowired PhotoRepository photoRepository;
    @Autowired UserService userService;

    private static Photo replaceFullnameToActual(Photo photo, Map<String, String> users) {
        photo.setUsername(users.get(photo.getUsername()));
        return photo;
    }

    public void uploadImage(MultipartFile file, Long chequeID, String username) {

        if(!file.isEmpty()) {
            Photo photo = new Photo();
            try {
                photo.setBytes(file.getBytes());
            } catch (IOException e) {e.printStackTrace();}
            photo.setName(file.getOriginalFilename());
            photo.setContentType(file.getContentType());
            photo.setChequeId(chequeID.toString());
            photo.setUsername(username);
            photo.setAddDate(OffsetDateTime.now());
            photoRepository.save(photo);
        }
    }

    public List<Photo> getListOfPhotoExcludeBytesFromCheque(String chequeID) {
        Map<String, String> users = userService.getUsernameFullnameMap();
        return photoRepository.findByChequeIdExcludeBytes(chequeID)
                .stream()
                .map(photo -> PhotoService.replaceFullnameToActual(photo, users))
                .collect(toList());
    }

    public Photo getPhotoByID(String photoID) {return photoRepository.findOne(photoID);}

    public void deletePhotoByID(String photoID) {photoRepository.delete(photoID);}

}