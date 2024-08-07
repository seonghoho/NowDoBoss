package com.ssafy.backend.domain.map.dto.response;

import java.util.List;
import java.util.Map;

public record MapResponse(
        Map<String, Map<String, Object>> names,
        Map<String, List<List<Double>>> coords
) {
}
