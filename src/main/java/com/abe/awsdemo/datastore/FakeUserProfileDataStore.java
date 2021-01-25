package com.abe.awsdemo.datastore;

import com.abe.awsdemo.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("77e347a8-9c7c-4f28-905a-ec9501c68f7e"), "AbePlays", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("bad9e252-a7af-4720-92fc-697e37cfd39e"), "LampardPlays", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
