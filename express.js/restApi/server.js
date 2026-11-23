
app.get("/jobs", (req, res) => {

    // 1. Get query parameters
    const {
        location,
        type,
        search,
        sort,
        order,
        page = 1,
        limit = 5
    } = req.query;

    // Work on a copy of the original jobs
    let result = [...jobs];

    // 2. FILTERING
    if (location) {
        result = result.filter((job) =>
            job.location.toLowerCase() === location.toLowerCase()
        );
    }

    if (type) {
        result = result.filter((job) =>
            job.type.toLowerCase() === type.toLowerCase()
        );
    }

    // 3. SEARCHING
    if (search) {
        result = result.filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    // 4. SORTING
    if (sort === "salary") {
        result.sort((a, b) => {
            return order === "asc"
                ? a.salary - b.salary
                : b.salary - a.salary;
        });
    }

    // 5. PAGINATION
    const pageNumber = Math.max(1, Number(page) || 1);
    const pageSize = Math.min(50, Math.max(1, Number(limit) || 5));

    const totalJobs = result.length;
    const totalPages = Math.ceil(totalJobs / pageSize);

    const skip = (pageNumber - 1) * pageSize;

    const paginatedJobs = result.slice(skip, skip + pageSize);

    // 6. RESPONSE
    res.status(200).json({
        totalJobs,
        totalPages,
        currentPage: pageNumber,
        jobs: paginatedJobs
    });

});
